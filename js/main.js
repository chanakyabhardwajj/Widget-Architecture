var app = {};
require.config({
    paths : {
        'jquery' : 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
        'underscore' : 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min',
        'backbone' : 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
        'backbone.localStorage' : 'http://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.0/backbone.localStorage-min',
        'chance' : 'lib/chance',
        'mockjax' : 'lib/jquery.mockjax'
    },
    shim : {
        'jquery' : {
            exports : "$"
        },
        'mockjax' : {
            deps : ['jquery'],
            exports : 'mockjax'
        },
        'underscore' : {
            exports : "_"
        },
        'backbone' : {
            deps : ['underscore', 'jquery'],
            exports : 'Backbone'
        },
        'backbone.localStorage' : {
            deps : ['backbone'],
            exports : 'Backbone'
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'mockjax', 'chance', 'modules/TextModule', 'modules/NewsModule'], function ($, _, Backbone, mockjax, chance, TextModule, NewsModule) {
    var chance = new Chance();

    $.mockjax({
        url: '/text',
        responseTime: 100,
        responseText: {
            status: 'success',
            data: [{title: chance.word(), text:chance.sentence()},{title: chance.word(), text:chance.sentence()},{title: chance.word(), text:chance.sentence()},{title: chance.word(), text:chance.sentence()},{title: chance.word(), text:chance.sentence()},{title: chance.word(), text:chance.sentence()}]
        }
    });

    $.mockjax({
        url: '/news',
        responseTime: 100,
        responseText: {
            status: 'success',
            data: [{title: chance.word(), text:chance.sentence()},{title: chance.word(), text:chance.sentence()},{title: chance.word(), text:chance.sentence()},{title: chance.word(), text:chance.sentence()},{title: chance.word(), text:chance.sentence()},{title: chance.word(), text:chance.sentence()}]
        }
    });


    var Router = Backbone.Router.extend({
        routes : {
            "*actions" : "main"
        },
        main : function (action) {
            TextModule.init($("#textModuleBoxContent"), "about");
            NewsModule.init($("#newsModuleBoxContent"), "random");
        }
    });

    var router = new Router();
    Backbone.history.start();
});


