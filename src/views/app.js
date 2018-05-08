var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();

    // videoListView.prototype.render();
    this.videos = new Videos(window.exampleVideoData);

    // console.log(this.videos)
    // this.videoListEntryView = new VideoListEntryView();
    // this.videoListView = new VideoListView();
    
    // this.videoListView.render();
    // this.videoPlayerView.render();
  
  },


  render: function() {
    console.log('AppView Render');
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
