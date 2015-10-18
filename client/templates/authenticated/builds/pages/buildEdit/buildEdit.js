Template.buildEdit.onCreated(function () {

  this.subscribe('slots');
  this.subscribe('builds');

  this.buildId = FlowRouter.current().params._id;
  this.buildStatsBySlot = new ReactiveDict();

});

Template.buildEdit.onRendered(() => {

  Modules.client.createOrUpdateBuildStats({
    form: "#build_stats_form",
    template: Template.instance()
  });

});

Template.buildEdit.helpers({

  buildStatsBySlot () {
    return Template.instance().buildStatsBySlot;
  },

  build () {
    return Builds.findOne({_id: Template.instance().buildId});
  },

  slots () {
    return Slots.find();
  }
});

Template.buildEdit.events({

  'submit #build_stats_form': (event) => {

    event.preventDefault();
    console.log('you submit a #build_stats_form form', event);

  }

});


