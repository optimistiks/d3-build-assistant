Meteor.publish('slots', function () {
  Meteor._sleepForMs(2000);
  return Slots.find({}, {fields: {name: 1}});
});
