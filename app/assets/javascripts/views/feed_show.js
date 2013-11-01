NewsReader.Views.FeedShow = Backbone.View.extend({
	template: JST["feeds/show"],

	events: {
		"click .refresh-entries": "reloadEntries"
	},

	initialize: function(options) {
		this.entriesIndexView = new NewsReader.Views.EntryIndex({ collection: this.model.entries });
		this.reloadEntries();
	},

	render: function(){
		var renderedContent = this.template({ feed: this.model });
		this.$el.html(renderedContent);
		var entriesIndexDiv = this.$el.find(".entries-index");
		entriesIndexDiv.empty();
		entriesIndexDiv.append(this.entriesIndexView.render().$el);
		return this;
	},

	reloadEntries: function(event) {
		var that = this;
		this.model.entries.fetch({
			success: function(collection, response, options) {
				that.render();
			}
		})
	},

	remove: function(){
		this.entriesIndexView.remove();
		// this.protototype.remove();
		this.stopListening();
	},

});