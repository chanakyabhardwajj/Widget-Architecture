define(["jquery", "backbone", "collections/NewsCollection", "views/NewsModelView"], function($, Backbone, NewsCollection, NewsModelView){
	var NewsCollectionView = Backbone.View.extend({	
		className : "newsCollectionViewBox",
		initialize : function(){
			this.listenTo(this.collection, 'reset', this.reset);
		},	
		collection : NewsCollection,

		render: function () {
			this.collection.each(this.addNewsModelItem, this);
			return this;
		},
	
		reset : function(){this.$el.html(''); this.render();},

		addNewsModelItem: function(NewsModelItem) {
			var NewsModelItemVw = new NewsModelView({ model: NewsModelItem });
			this.$el.append( NewsModelItemVw.render().el );			
		}

	});

	return NewsCollectionView;
})
