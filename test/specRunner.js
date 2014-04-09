require.config({
    baseUrl: "../www/",
    paths:{
        text: 'lib/require/text-2.0.10',
        underscore: 'lib/underscore/underscore-1.6.0',
        Backbone: 'lib/backbone/backbone-1.1.2',
        jquery: 'lib/jquery/jquery-1.11.0',
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
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        'jasmine-jquery': {
            deps: ['jquery', 'jasmine'],
            exports: 'jasmine'
        },
        boot: {
            deps: ['jasmine', 'jasmine-html', 'jasmine-jquery'],
            exports: 'jasmine'
        }
    }
});

require(['boot'],
    function(jasmine) {
    
    var specs = [];
    // specs.push('spec/model/frameSpec');
    
    require(specs, function(){
        window.onload();
    });
});
