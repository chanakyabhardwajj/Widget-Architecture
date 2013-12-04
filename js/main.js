var app = {};
require.config({
	paths: {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
     	'underscore': 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min',
    	'backbone': 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
    	'backbone.localStorage': 'http://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.0/backbone.localStorage-min',
		'chance' : 'lib/chance'
  },
  shim: {
    'jquery': {
      exports: "$"
    },
	'underscore': {
      exports: "_"
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    }
  }
});

require(['jquery', 'underscore', 'backbone', 'modules/TextModule', 'modules/NewsModule'], function($, _, Backbone, TextModule, NewsModule){
	var Router = Backbone.Router.extend({
		routes: {
		  "*actions": "main"
		},
		main: function(action){
			TextModule.init($("#textModuleBoxContent"),"about");
			NewsModule.init($("#newsModuleBoxContent"),"random");
		}
	});

	var router = new Router();
	Backbone.history.start();
});


