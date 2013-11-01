NewsReader.Models.Feed = Backbone.Model.extend({

	initialize: function(options) {
		this.entries = options.entries;
	},
});