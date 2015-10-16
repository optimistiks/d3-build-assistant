Template['build-edit'].onCreated(() => {
  Template.instance().subscribe('builds');
  Template.instance().subscribe('slots');
  Template.instance().subscribe('itemProps');
});

Template['build-edit'].helpers({
  build: function () {
    return Builds.findOne({_id: FlowRouter.current().params._id});
  },
  slots: function () {
    return Slots.find();
  },
  itemProps: function () {
    return ItemProps.find();
  }
});
