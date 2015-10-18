BuildStats = new Meteor.Collection('BuildStats');

BuildStats.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

BuildStats.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let BuildStatsSchema = new SimpleSchema({
  "userId": {
    type: String,
    label: "Id of the user."
  },
  "buildId": {
    type: String,
    label: "Id of the build."
  },
  "slotId": {
    type: String,
    label: "Id of the slot."
  },
  "slotName": {
    type: String,
    label: "Name of the stat."
  },
  "itemPropId": {
    type: String,
    label: "Id of the prop."
  },
  "itemPropName": {
    type: String,
    label: "Name of the prop."
  },
  "priority": {
    type: Number,
    label: "Priority of the stat."
  },
  "value": {
    type: Number,
    label: "Current value of the stat."
  }
});

BuildStats.attachSchema(BuildStatsSchema);
