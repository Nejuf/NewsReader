NewsReader.Views.EntryShow = Backbone.View.extend({
	template: JST["feeds/entries/show"],

	render: function(){
		var renderedContent = this.template({ entry: this.model });
		this.$el.html(renderedContent);
		return this;
	},

});