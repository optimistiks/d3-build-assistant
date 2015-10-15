Slots = new Meteor.Collection('Slots');

Slots.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Slots.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let SlotsSchema = new SimpleSchema({
  "name": {
    type: String,
    label: "Name of the slot."
  }
});

Slots.attachSchema(SlotsSchema);
