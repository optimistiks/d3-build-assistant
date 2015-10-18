Template.buildStatView.onCreated(function () {

  this.subscribe('itemProps');

});

Template.buildStatView.helpers({

  itemProps () {
    return ItemProps.find();
  }

});
