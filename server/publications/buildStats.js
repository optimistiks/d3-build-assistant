Meteor.publish('buildStats', function () {
  return BuildStats.find({userId: this.userId});
});
