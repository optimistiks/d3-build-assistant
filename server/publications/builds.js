Meteor.publish('builds', function () {
  return Builds.find({userId: this.userId}, {fields: {id: 1, name: 1}});
});
