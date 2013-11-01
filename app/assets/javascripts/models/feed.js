NewsReader.Models.Feed = Backbone.Model.extend({

	initialize: function(options) {
		this.entries = options.entries || new NewsReader.Collections.Entries([], { feed: this });
	},

	parse: function(serverAttributes, options) {

		if(serverAttributes.hasOwnProperty("entries")) {
			var entries = serverAttributes.entries;
			delete serverAttributes.entries;
			if(!this.entries){
				this.entries = new NewsReader.Collections.Entries([], { feed: this });
			}
			this.entries.set(entries);
		}

		return serverAttributes
	},
});