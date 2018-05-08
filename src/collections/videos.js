var Videos = Backbone.Collection.extend({

  model: Video,

  // url: '../../spec/data/fakeVideoData.js',

  search: function() {
       
    this.collection.fetch();
  },

  parse: function() {
  

  }

});
