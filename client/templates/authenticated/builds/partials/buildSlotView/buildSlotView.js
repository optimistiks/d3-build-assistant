Template.buildSlotView.onCreated(function () {

  console.log('buildSlotView.onCreated', arguments, this);

  var buildStatsSubscription = this.subscribe('buildStats');

  this.autorun(function () {
    if (buildStatsSubscription.ready()) {
      console.log('build stats ready, add me to reactive dict');

    } else {
      console.log('build stats not ready');
    }
  });

});

Template.buildSlotView.helpers({

  slot () {
    return this.slot;
  },

  buildStats () {
    return this.buildStatsBySlot.get(this.slot._id);
  }

});

Template.buildSlotView.events({

  'click .add-build-stat': function (event, template) {

    var buildStats = this.buildStatsBySlot.get(this.slot._id) || [];
    buildStats.push({});
    this.buildStatsBySlot.set(this.slot._id, buildStats);

    console.log('you click add', this);
  }

});

