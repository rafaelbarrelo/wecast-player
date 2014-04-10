define(['Backbone', 'components/baseView',
        'text!templates/player.html'],
        function(Backbone, BaseView,
                 playerTemplate) {

    var PlayerView = BaseView.extend({
        
        PLAYER_WIDTH: 480,
        
        initialize: function(options) {
            BaseView.prototype.initialize.call(this);
            
            this.options = options;
            
            this.proxedOnTimeUpdate = $.proxy(this.onTimeUpdate, this);
        },

        render: function() {
            var that = this;
            
            this.$el.html(_.template(playerTemplate, {options: this.options}));
            
            this.$el.css("width", this.PLAYER_WIDTH).addClass("wecast-player");
            
            this.player = new MediaElementPlayer(this.select('#wecast-audio'),
                {
                    audioWidth: "100%",
                    audioHeight: 32,
                    
                    pluginPath: '/lib/media-element/',
                    
                    success: function(mediaElement, originalNode) {
                        that.mediaElement = mediaElement;
                        
                        $(that.mediaElement).bind('timeupdate', that.proxedOnTimeUpdate);
                        
                        that.mediaElement.play();
                    }
                });
            
            return this;
        },

        onTimeUpdate: function(event) {
            console.log("currentTime: " + this.mediaElement.currentTime);
        },

        remove: function() {
            $(that.mediaElement).unbind('timeupdate', that.proxedOnTimeUpdate);
            
            BaseView.prototype.remove.call(this);
        }
    });

    return PlayerView;
});