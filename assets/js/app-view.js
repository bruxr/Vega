var AppView = Backbone.View.extend({
  
  el: $('#wrap'),
  
  initialize: function() {
    
  }
  
});

$(function() { window.App = new AppView(); });