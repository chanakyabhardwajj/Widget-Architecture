define(["jquery", "backbone", "models/TextModel"], function($, Backbone, TextModel){
	var TextModelView = Backbone.View.extend({
		className : "textModelItem",
		model : TextModel,
		render : function(){
			var txBox = $("<div></div>");
			var txText = $("<p></p>").html(this.model.get("text")).addClass("textModelItemText");
			var txTitle = $("<p></p>").html(this.model.get("title")).addClass("textModelItemTtile");
			txBox.append(txText);
			txBox.append(txTitle);
			this.$el.append(txBox);
			return this;
		}
	});

	return TextModelView;
})
