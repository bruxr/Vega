var AppView = Backbone.View.extend({
  el: $('#wrap')
});

$(function() { window.App = new AppView(); });