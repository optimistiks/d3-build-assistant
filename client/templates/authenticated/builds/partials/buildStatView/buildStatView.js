Template.buildStatView.onCreated(function () {

  this.subscribe('itemProps');

});

Template.buildStatView.helpers({

  slot () {
    return this.slot;
  },

  itemProps () {
    return ItemProps.find();
  }

});
