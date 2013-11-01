NewsReader.Views.EntryIndex = Backbone.View.extend({
	template: JST["feeds/entries/index"],

	render: function() {
		var renderedContent = this.template({ entries: this.collection });
		this.$el.html(renderedContent);
		return this;
	},
});