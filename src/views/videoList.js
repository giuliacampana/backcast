var VideoListView = Backbone.View.extend({
  // el: 

  initialize: function() {
    console.log('VideoListView ' + VideoListView);
    this.collection.on('select:sync', this.render(), this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    // var $list = this.$('.video-list');
      
    // this.collection.each(function(model) {
    //   var item = new VideoListView({model: model});
    //   $list.append(item.render().$el);
    // }, this);

    // this.$el.children().append(this.collection.forEach(function() {
      

    // }));

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
