define(['Backbone', 'components/baseView',
        'text!templates/main.html'],
        function(Backbone, BaseView,
                mainTemplate) {

    var MainView = BaseView.extend({

        render: function() {
            this.$el.html(_.template(mainTemplate));
            
            this.select("#wecast-player").wecast();
            
            return this;
        }
    });

    return MainView;
});