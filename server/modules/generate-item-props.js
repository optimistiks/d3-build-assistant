let itemPropNames = JSON.parse(Assets.getText('itemProps.json'));

let generateItemProps = () => {
  let itemPropsExist = _allItemPropsExist(itemPropNames.length);

  if (!itemPropsExist) {
    _createItemProps(itemPropNames);
  }
};

let _allItemPropsExist = (count) => {
  let itemPropCount = ItemProps.find().count();
  return itemPropCount === count;
};

let _createItemProps = (itemProps) => {
  for (let i = 0; i < itemProps.length; i++) {
    let itemPropName = itemProps[i],
      itemPropExists = _checkIfItemPropExists(itemPropName);

    if (!itemPropExists) {
      _createItemProp(itemPropName);
    }
  }
};

let _checkIfItemPropExists = (name) => {
  return ItemProps.findOne({name: name});
};

let _createItemProp = (itemPropName) => {
  ItemProps.insert({
    name: itemPropName
  });
};

Modules.server.generateItemProps = generateItemProps;
