var SearchView = Backbone.View.extend({

  
  // search: function() {
  
  // },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
