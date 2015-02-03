var AppView = Backbone.View.extend({
  el: $('#wrap')
});

$(function() { window.App = new AppView(); });
var ImgCollection = Backbone.Collection.extend({
  model: Img
});
var Img = Backbone.Model.extend({
  
  defaults: function() {
    return {
      url: null,
      loaded: false
    };
  },
  
});