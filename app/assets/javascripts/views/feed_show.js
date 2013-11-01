NewsReader.Views.FeedShow = Backbone.View.extend({
	template: JST["feeds/show"],

	events: {
		"click .refresh-entries": "reloadEntries"
	},

	render: function(){
		var renderedContent = this.template({ feed: this.model });
		this.$el.html(renderedContent);
		return this;
	},

	reloadEntries: function(event) {
		var entries = $.ajax({
			type: "GET",
			url: "feeds/" + this.model.id + "/entries",
			datatype: "json",
			success: function(data, textStatus, jqXHR) {
				debugger
			}
		})
	}

});