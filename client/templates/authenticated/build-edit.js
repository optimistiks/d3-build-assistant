Template['build-edit'].onCreated(() => {
  Template.instance().subscribe('buildStats');
  Template.instance().subscribe('builds');
  Template.instance().subscribe('slots');
  Template.instance().subscribe('itemProps');
});

var buildStats = new Blaze.Var([]);

Template['build-edit'].events({
  'click .add-build-stat': (event) => {
    console.log('you click add', event);
  }
});

Template['build-edit'].helpers({
  buildStats: function (slotId) {
    return buildStats.get();
  },
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
