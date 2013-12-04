define(["backbone"], function(Backbone){
	var TextModel = Backbone.Model.extend({
		defaults : {
			"myType" : "TextModel"	
		}	
	});
	return TextModel;
})
