var FormView = Backbone.View.extend({
  
  className: 'urlform',
  
  events: {
    'submit form': 'submitURL'
  },
  
  template: _.template(
    '<h1>Vega</h1>'                                                                +
//    '<small class="gray">Create slideshows with your internet photos.</small>'     +
    '<form>'                                                                       +
    '<input type="url" placeholder="Pinterest board URL goes here..." required>'   +
    '<button>Go</button>'                                                      +
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