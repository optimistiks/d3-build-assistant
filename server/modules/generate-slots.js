let slotNames = JSON.parse(Assets.getText('slots.json'));

let generateSlots = () => {
  let slotsExist = _allSlotsExist(slotNames.length);

  if (!slotsExist) {
    _createSlots(slotNames);
  }
};

let _allSlotsExist = (count) => {
  let slotCount = Slots.find().count();
  return slotCount === count;
};

let _createSlots = (slotNames) => {
  for (let i = 0; i < slotNames.length; i++) {
    let slotName = slotNames[i],
      slotExists = _checkIfSlotExists(slotName);

    if (!slotExists) {
      _createSlot(slotName);
    }
  }
};

let _checkIfSlotExists = (slotName) => {
  return Slots.findOne({name: slotName});
};

let _createSlot = (slotName) => {
  Slots.insert({
    name: slotName
  });
};

Modules.server.generateSlots = generateSlots;
