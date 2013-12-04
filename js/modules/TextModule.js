define(["collections/TextCollection", "views/TextCollectionView"], function(TextCollection, TextCollectionView){
	var coll, collView;

	function init(elem, key){
		coll = new TextCollection([], {key : key || "default"});
		collView = new TextCollectionView({collection : coll});
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
	
	window.TextModule = retObj;
	return retObj;
})		

