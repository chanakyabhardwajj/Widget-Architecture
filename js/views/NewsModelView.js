define(["jquery", "backbone", "models/NewsModel"], function($, Backbone, NewsModel){
	var NewsModelView = Backbone.View.extend({
		className : "newsModelItem",
		model : NewsModel,
		render : function(){
			var txBox = $("<div></div>");
			var txText = $("<p></p>").html(this.model.get("text")).addClass("newsModelItemText");
			var txTitle = $("<p></p>").html(this.model.get("title")).addClass("newsModelItemTtile");
			txBox.append(txText);
			txBox.append(txTitle);			
			this.$el.append(txBox);
			return this;
		}
	});

	return NewsModelView;
})
