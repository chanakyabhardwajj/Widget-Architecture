define(["backbone", "models/NewsModel"], function(Backbone, NewsModel){
	var NewsCollection = Backbone.Collection.extend({
		initialize :  function(models, options){
			this.key = options.key || "contain";		
		},
		model : NewsModel,
		url: function(){
			return "/news"
		},
		parse: function(resp, xhr) {
			  return resp.data;
		}
	});

	return NewsCollection;
})

