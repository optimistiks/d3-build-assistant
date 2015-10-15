Meteor.publish('slots', function () {
  return Slots.find({}, {fields: {name: 1}});
});
