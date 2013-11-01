NewsReader.Views.FeedShow = Backbone.View.extend({
	template: JST["feeds/show"],

	render: function(){
		var renderedContent = this.template({ feed: this.model });
		this.$el.html(renderedContent);
		return this;
	},
});