define(["backbone", "models/TextModel"], function(Backbone, TextModel){
	var TextCollection = Backbone.Collection.extend({
		initialize :  function(models, options){
			this.key = options.key || "contain";		
		},
		model : TextModel,
		url: function(){
			//return "http://api.wordnik.com/v4/word.json/" + this.key + "/examples?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
            return "/text"
		},
		parse: function(resp, xhr) {
            console.log(resp)
            return resp.data;
		}
	});

	return TextCollection;
})

