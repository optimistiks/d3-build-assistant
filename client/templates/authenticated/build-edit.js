Template['build-edit'].onCreated(function () {

  this.subscribe('buildStats');
  this.subscribe('builds');
  this.subscribe('slots');
  this.subscribe('itemProps');

});


Template['build-edit'].events({
  'click .add-build-stat': (event) => {
    console.log('you click add', event);
  }
});

Template['build-edit'].helpers({
  buildStatsBySlotId (slotId) {
    return BuildStats.find({buildId: FlowRouter.current().params._id, slotId: slotId});
  },
  build () {
    return Builds.findOne({_id: FlowRouter.current().params._id});
  },
  slots () {
    console.log('slots helper, return', Template.instance().slots);
    return Slots.find()
  },
  itemProps () {
    console.log('item props helper, return', Template.instance().itemProps);
    return ItemProps.find();
  }
});
