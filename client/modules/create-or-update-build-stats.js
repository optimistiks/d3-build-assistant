let createOrUpdateBuildStats = (options) => {
  _validate(options.form, options.template);
};

let _validate = (form, template) => {
  $(form).validate(validation(template));
};

let validation = (template) => {

  return {
    submitHandler() {
      _handleSubmit(template);
    }
  };

};

let _handleSubmit = (template) => {

  var buildStats = [];

  var buildStatsBySlotObj = template.buildStatsBySlot.all();

  Object.keys(buildStatsBySlotObj).forEach((slotId) => {

    buildStatsBySlotObj[slotId].forEach((buildStat, index) => {

      var selector = '[name="buildStats[:slotId][:index][:name]"]';
      selector = selector.replace(':slotId', slotId);
      selector = selector.replace(':index', index);

      buildStat.userId = Meteor.userId();
      buildStat.buildId = template.buildId;
      buildStat.slotId = slotId;
      buildStat.itemPropId = template.find(selector.replace(':name', 'itemPropId')).value;
      buildStat.priority = template.find(selector.replace(':name', 'priority')).value;
      buildStat.value = template.find(selector.replace(':name', 'value')).value;

      buildStats.push(buildStat);

    });

  });

  console.log('trying to handle submit of build stats', buildStats);

};

Modules.client.createOrUpdateBuildStats = createOrUpdateBuildStats;
