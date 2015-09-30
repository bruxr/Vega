var Photo = Backbone.Model.extend({
  
  defaults: function() {
    return {
      url: null,
      link: null,
      loaded: false
    };
  },
  
  initialize: function(attributes) {
    this.set('url', attributes.url.replace('/237x/', '/736x/'));
  },
  
  fullSizeURL: function() {
    return this.get('url').replace('/237x/', '/736x/');
  },
  
  // Preload the image behind the scenes.
  // Returns a jQuery Promise that resolves to this model
  // when the image has finished loading.
  preload: function() {
    var dfd = new $.Deferred(),
        img = new Image(),
        self = this;
    img.src = this.fullSizeURL();
    img.onload = function() { dfd.resolve(self); };
    return dfd.promise();
  },
  
});

Photo.getFullsizeURL = function(url) {
  return url;
};