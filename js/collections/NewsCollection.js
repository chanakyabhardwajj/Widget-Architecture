define(["backbone", "models/NewsModel"], function(Backbone, NewsModel){
	var NewsCollection = Backbone.Collection.extend({
		initialize :  function(models, options){
			this.key = options.key || "contain";		
		},
		model : NewsModel,
		url: function(){
			return "http://api.wordnik.com/v4/word.json/" + this.key + "/examples?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
		},
		parse: function(resp, xhr) {
			  return resp.examples;
		}
	});

	return NewsCollection;
})

