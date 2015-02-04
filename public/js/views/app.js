var AppView = Backbone.View.extend({
  
  el: $('#wrap'),
  
  url: null,
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    if (this.url === null) {
      this.$el.html(new FormView().render().$el);
    }
    return this;
  },
  
  processURL: function(url) {
    if (url.match(/https\:\/\/www\.pinterest\.com\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+\/?/)) {
      this.url = url;
    }
  },
  
});

$(function() { window.App = new AppView(); });