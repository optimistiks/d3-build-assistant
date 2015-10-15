Meteor.subscribe('slots');
Meteor.subscribe('itemProps');

Template['build-form'].helpers({
  slots: function () {
    return Slots.find();
  },
  itemProps: function () {
    return ItemProps.find();
  }
});
