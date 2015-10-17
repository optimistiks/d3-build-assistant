var buildStatsBySlot = new ReactiveDict();

Template.buildEdit.onCreated(function () {

  this.subscribe('slots');
  this.subscribe('builds');
  this.subscribe('itemProps');

  var buildStatsSubscription = this.subscribe('buildStats');

  this.autorun(function () {
    if (buildStatsSubscription.ready()) {
      console.log('build stats ready, add me to reactive dict');

    } else {
      console.log('build stats not ready');
    }
  });

});

Template.buildEdit.helpers({

  buildStatsBySlot () {
    var slotId = this._id;
    console.log('buildStatsBySlot call', arguments, this);
    return buildStatsBySlot.get(slotId);
  },

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

Template.buildSlotView.events({
  'click .add-build-stat': (event, template) => {
    var slotId = template.data.slot._id;
    var buildStats = buildStatsBySlot.get(slotId) || [];
    buildStats.push(slotId);
    buildStatsBySlot.set(slotId, buildStats);
    console.log('you click add');
  }
});

