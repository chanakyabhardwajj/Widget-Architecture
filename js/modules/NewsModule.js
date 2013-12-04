define(["collections/NewsCollection", "views/NewsCollectionView"], function(NewsCollection, NewsCollectionView){
	var coll, collView;

	function init(elem, key){
		coll = new NewsCollection([], {key : key || "default"});
		collView = new NewsCollectionView({collection : coll});
		coll.fetch({
			success: function(){
				elem.html(collView.render().el);
			}
		});
	}

	function cleanUp(){
		coll.reset();
		collView.remove();
		elem.html("");
	}

	var retObj = {
		init : init,
		cleanUp : cleanUp
	};
	
	window.NewsModule = retObj;
	return retObj;
})		

