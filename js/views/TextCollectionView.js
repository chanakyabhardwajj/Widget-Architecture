define(["jquery", "backbone", "collections/TextCollection", "views/TextModelView"], function($, Backbone, TextCollection, TextModelView){
	var TextCollectionView = Backbone.View.extend({	
		className : "textCollectionViewBox",
		initialize : function(){
			this.listenTo(this.collection, 'reset', this.reset);
		},	
		collection : TextCollection,

		render: function () {
			this.collection.each(this.addTextModelItem, this);
			return this;
		},
	
		reset : function(){this.$el.html(''); this.render();},

		addTextModelItem: function(textModelItem) {
			var textModelItemVw = new TextModelView({ model: textModelItem });
			this.$el.append( textModelItemVw.render().el );			
		}

	});

	return TextCollectionView;
})
