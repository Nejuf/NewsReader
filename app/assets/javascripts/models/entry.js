NewsReader.Models.Entry = Backbone.Model.extend({

	initialize: function(attributes, options) {
		this.feed = options.feed;
	},
});