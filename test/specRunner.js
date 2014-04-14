require.config({
    baseUrl: "../www/",
    paths:{
        text: 'lib/require/text-2.0.10',
        underscore: 'lib/underscore/underscore-1.6.0',
        Backbone: 'lib/backbone/backbone-1.1.2',
        jquery: 'lib/jquery/jquery-1.11.0',
        jgestures: 'lib/jgestures/jgestures-0.90',
        'media-element': 'lib/media-element/mediaelement-and-player',
        'jquery-wecast': 'plugin/jquery-wecast',
        
        jasmine: '../test/lib/jasmine-2.0.0/jasmine',
        'jasmine-html': '../test/lib/jasmine-2.0.0/jasmine-html',
        boot: '../test/lib/jasmine-2.0.0/boot',
        'jasmine-jquery': '../test/lib/jasmine-jquery/jasmine-jquery-2.1.0',
        spec: '../test/spec'
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
        },        
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine']
        },
        boot: {
            deps: ['jasmine-html', 'jgestures', 'media-element', 'jquery-wecast', 'utils/utils'],
            exports: 'jasmine'
        },
        'jasmine-jquery': {
            deps: ['boot'],
            exports: 'jasmine'
        },
    }
});

require(['jasmine-jquery'],
    function(jasmine) {
    
    var specs = [];
    
    specs.push('spec/SpecHelper');
    specs.push('spec/views/mainViewSpec');
    specs.push('spec/views/playerViewSpec');
    
    require(specs, function(){
        window.onload();
    });
});
