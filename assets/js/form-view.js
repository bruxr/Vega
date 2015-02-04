var FormView = Backbone.View.extend({
  el: 'div',
  template: _.template($(' \
    <form class="url-form"> \
      <input type="url" placeholder="Pinterest address goes here..."> \
      <button>Submit</button> \
    </form> \
  ')),
  
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});