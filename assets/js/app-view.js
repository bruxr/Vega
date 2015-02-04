var AppView = Backbone.View.extend({
  
  el: $('#wrap'),
  
  url: null,
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    console.log('rendering...');
    if (this.url === null) {
      //this.$el.html(new FormView().render().$el);
      console.log(new FormView());
    }
    return this;
  }
  
});

$(function() { window.App = new AppView(); });