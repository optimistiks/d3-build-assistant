Template.buildEdit.onCreated(function () {

  this.subscribe('slots');
  this.subscribe('builds');

  this.buildStatsBySlot = new ReactiveDict();

});

Template.buildEdit.helpers({

  buildStatsBySlot () {
    return Template.instance().buildStatsBySlot;
  },

  build () {
    return Builds.findOne({_id: FlowRouter.current().params._id});
  },

  slots () {
    return Slots.find();
  }
});


