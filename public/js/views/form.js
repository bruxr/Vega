var FormView = Backbone.View.extend({
  
  events: {
    'submit form': 'submitURL'
  },
  
  template: _.template('<form>'     +
    '<input type="url" placeholder="Pinterest board URL goes here..." required>'   +
    '<button>Submit</button>'       +
    '</form>'),
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  submitURL: function(e) {
    e.preventDefault();
    var url = $.trim($('input', this.$el).val());
    App.processURL(url);
  },
  
});