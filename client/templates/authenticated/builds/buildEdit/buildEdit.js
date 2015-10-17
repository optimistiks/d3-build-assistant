Template.buildEdit.onCreated(function () {

  var slotsSubscription = this.subscribe('slots');

  this.subscribe('buildStats');
  this.subscribe('builds');
  this.subscribe('itemProps');

  this.autorun(function () {
    if (slotsSubscription.ready()) {
      console.log('slots ready');
    } else {
      console.log('slots not ready');
    }
  });

});

Template.buildEdit.helpers({

  build () {
    return Builds.findOne({_id: FlowRouter.current().params._id});
  },

  slots () {
    return Slots.find();
  },

  itemProps () {
    return ItemProps.find();
  }
});
