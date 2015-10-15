let slots = [
  {name: 'head'}
];

let generateSlots = () => {
  let slotsExist = _checkIfSlotsExist(slots.length);

  if (!slotsExist) {
    _createSlots(slots);
  }
};

let _checkIfSlotsExist = (count) => {
  let slotCount = Meteor.slots.find().count();
  return slotCount < count;
};

let _createSlots = (slots) => {
  for (let i = 0; i < slots.length; i++) {
    let slot = slots[i],
      slotExists = _checkIfSlotExists(slot.name);

    if (!slotExists) {
      _createSlot(slot);
    }
  }
};

let _checkIfSlotExists = (name) => {
  return Meteor.slots.findOne({name: name});
};

let _createSlot = (slot) => {
  Slots.createSlot({
    name: slot.name
  });
};

Modules.server.generateSlots = generateSlots;
