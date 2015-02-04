var Slide = Backbone.View.extend({
  
  className: 'slide',
  
  template: _.template('<img src="<%= url %>">'),
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
});