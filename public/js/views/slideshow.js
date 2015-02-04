var Slideshow = Backbone.View.extend({
  
  className: 'slideshow',
  
  currentIndex: 0,
  
  initialize: function() {
    
  },
  
  render: function() {
    this.currentIndex = this.showSlide(this.currentIndex);
    //this.$el.html(new Vega.Slide({model: this.collection.first()}));
    return this;
  },
  
  interval: function() {
    var dfd = new $.Deferred();
    setTimeout(function() {
      dfd.resolve();
    }, 8000);
    return dfd;
  },
  
  showSlide: function(index) {
    var photo = this.collection.at(index),
        nextIndex = index == 50 ? 0 : index + 1,
        self = this;
        
    photo.preload().done(function(photo) {
      self.$el.html(new Slide({model: photo}).render().$el);
    });
    
    $.when(this.collection.at(nextIndex).preload(), this.interval()).done(function() {
      self.showSlide(nextIndex);
    });
    
    return nextIndex;
  }
  
});