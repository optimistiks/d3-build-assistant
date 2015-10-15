Builds = new Meteor.Collection('Builds');

Builds.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Builds.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let BuildsSchema = new SimpleSchema({
  "userId": {
    type: String,
    label: "Id of the user."
  },
  "name": {
    type: String,
    label: "Name of the build."
  }
});

Builds.attachSchema(BuildsSchema);
