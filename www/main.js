require.config({
    paths:{
        text: 'lib/require/text-2.0.10',
        underscore: 'lib/underscore/underscore-1.6.0',
        Backbone: 'lib/backbone/backbone-1.1.2',
        jquery: 'lib/jquery/jquery-1.11.0',
        jgestures: 'lib/jgestures/jgestures-0.90',
        'media-element': 'lib/media-element/mediaelement-and-player',
        'jquery-wecast': 'plugin/jquery-wecast'
    },
    shim:{
        Backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        jgestures: {
            deps: ['jquery']
        },
        'media-element': {
            deps: ['jquery']
        },
        'jquery-wecast': {
            deps: ['media-element']
        }
    }
});

require(['views/mainView', 'jgestures', 'media-element', 'jquery-wecast', 'utils/utils'],
        function(MainView) {
    
    new MainView({el: 'body'}).render();
});