define(['Backbone', 'components/baseView',
        'text!templates/player.html'],
        function(Backbone, BaseView,
                 playerTemplate) {

    var PlayerView = BaseView.extend({

        id: "wecast-player",
        
        initialize: function() {
            BaseView.prototype.initialize.call(this);
            
            this.proxedOnTimeUpdate = $.proxy(this.onTimeUpdate, this);
        },

        render: function() {
            var that = this;
            
            this.$el.html(_.template(playerTemplate));
            
            this.player = new MediaElementPlayer(this.select('#wecast-media-element'),
                {
                    audioWidth: 480,
                    audioHeight: 34,
                    
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