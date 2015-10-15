Meteor.subscribe('slots');

Template['build-form'].helpers({
  slots: function () {
    return Slots.find();
  }
});
