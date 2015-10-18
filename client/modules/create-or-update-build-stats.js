let createOrUpdateBuildStats = (options) => {
  _validate(options.form, options.template);
};

let _validate = (form, template) => {
  console.log('passing form to validate');
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
  console.log('trying to handle submit of build stats, template = ', template);
};

Modules.client.createOrUpdateBuildStats = createOrUpdateBuildStats;
