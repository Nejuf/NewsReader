window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NewsReader.Routers.AppRouter({ $rootEl: $("#content") });
		Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
