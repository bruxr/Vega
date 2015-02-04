var Photo = Backbone.Model.extend({
  
  defaults: function() {
    return {
      url: null,
      link: null,
      loaded: false
    };
  },
  
  fullSizeUrl: function() {
    
  },
  
});

Photo.getFullsizeURL = function(url) {
  return url;
};