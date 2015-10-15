Meteor.publish('itemProps', function () {
  return ItemProps.find({}, {fields: {id: 1, name: 1}});
});
