define(['Backbone'], function(Backbone) {

    var BaseView = Backbone.View.extend({

        events: {
        },

        select: function(selector) {
            return $(selector, this.$el);
        }
    });

    return BaseView;
});