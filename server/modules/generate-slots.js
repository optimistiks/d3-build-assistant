let slots = [
  {name: 'Head'},
  {name: 'Shoulders'},
  {name: 'Torso'},
  {name: 'Wrists'},
  {name: 'Hands'},
  {name: 'Waist'},
  {name: 'Legs'},
  {name: 'Feet'},
  {name: 'Amulet'},
  {name: 'First ring'},
  {name: 'Second ring'},
  {name: 'Main hand'},
  {name: 'Off hand'}
];

let generateSlots = () => {
  let slotsExist = _allSlotsExist(slots.length);

  if (!slotsExist) {
    _createSlots(slots);
  }
};

let _allSlotsExist = (count) => {
  let slotCount = Slots.find().count();
  return slotCount === count;
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
  return Slots.findOne({name: name});
};

let _createSlot = (slot) => {
  Slots.insert({
    name: slot.name
  });
};

Modules.server.generateSlots = generateSlots;
