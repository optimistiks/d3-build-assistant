ItemProps = new Meteor.Collection('ItemProps');

ItemProps.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

ItemProps.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let ItemPropsSchema = new SimpleSchema({
  "name": {
    type: String,
    label: "Name of the prop."
  }
});

ItemProps.attachSchema(ItemPropsSchema);
