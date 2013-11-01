NewsReader.Routers.AppRouter = Backbone.Router.extend({

	routes: {
		"": "feedsIndex",
		"/feeds": "feedsIndex",
		"feeds/:id": "feedShow",
		"feeds/:feed_id/entries": "entriesIndex",
		"feeds/:feed_id/entries/:id": "entryShow",
	},

	initialize: function(options) {
		var router = this;
		this.$rootEl = options.$rootEl;
		this.feedsCollection = new NewsReader.Collections.Feeds();
		this.feedsCollection.fetch({
			success: function(collection, response, options){
				if(router._currentView &&
					router._currentView instanceof NewsReader.Views.FeedIndex){
					router.feedsIndex();
				}
			},
			error: function(){alert("failure")}
		});
	},

	feedsIndex: function(){
		var feedIndexView = new NewsReader.Views.FeedIndex({ collection: this.feedsCollection });
		this._swapView(feedIndexView);
	},

	feedShow: function(id) {
		if(!this.feedsCollection) return;
		var model = this.feedsCollection.get(id);
		var feedShowView = new NewsReader.Views.FeedShow({ model: model });
		this._swapView(feedShowView);
	},

	entriesIndex: function(feed_id) {

	},

	entryShow: function(feed_id, id) {

	},

	_swapView: function(newView) {
		if(this._currentView){
			this._currentView.remove();
		}

		this._currentView = newView;
		this.$rootEl.html(this._currentView.render().$el);
	},
});