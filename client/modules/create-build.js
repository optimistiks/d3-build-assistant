let createBuild = (options) => {
  _validate(options.form, options.template);
};

let _validate = (form, template) => {
  $(form).validate(validation(template));
};

let validation = (template) => {
  return {
    rules: {
      buildName: {
        required: true
      }
    },
    messages: {
      buildName: {
        required: 'Need a build name.'
      }
    },
    submitHandler() {
      _handleCreate(template);
    }
  };
};

let _handleCreate = (template) => {
  let build = {
    name: template.find('[name="buildName"]').value
  };

  Meteor.call('insertBuild', build, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert('Build created!', 'success');
    }
  });
};

Modules.client.createBuild = createBuild;
