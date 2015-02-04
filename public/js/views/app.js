var AppView = Backbone.View.extend({
  
  el: $('#wrap'),
  
  url: null,
  
  images: null,
  
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
    var regex = /^https\:\/\/www\.pinterest\.com\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\/?$/,
        matches = null;
    if (matches = regex.exec(url)) {
      this.url = url;
      this.buildCollection(matches[1], matches[2]).done(function() {
        
      });
    }
  },
  
  buildCollection: function(user, board) {
    var url = 'https://api.pinterest.com/v3/pidgets/boards/'+ user +'/'+ board +'/pins?callback=?',
        coll = new Photos;
        
    return $.getJSON(url)
            .done(function(res) {
              $.each(res.data.pins, function(i, item) {
                coll.add({
                  url: Photo.getFullsizeURL(item.images['237x'].url),
                  link: item.link
                });
              });
              return coll;
            });
  },
  
});

$(function() { window.App = new AppView(); });