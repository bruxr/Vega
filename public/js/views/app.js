var AppView = Backbone.View.extend({
  
  $el: $('#wrap'),
  
  url: null,
  
  initialize: function() {
    
  },
  
  render: function() {
    if (this.url === null) {
      this.$el.html(new FormView().render().$el);
    }
  }
  
});

$(function() { window.App = new AppView(); window.App.render(); });