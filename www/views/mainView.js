define(['Backbone', 'components/baseView', 'views/playerView'],
        function(Backbone, BaseView, PlayerView) {

    var MainView = BaseView.extend({

        initialize: function() {
            BaseView.prototype.initialize.call(this);
        },

        render: function() {
            
            var playerView = new PlayerView();
            
            this.$el.append(playerView.render().el);
            
            return this;
        }
    });

    return MainView;
});