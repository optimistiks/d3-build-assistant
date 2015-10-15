Meteor.subscribe('builds');

Template.dashboard.onRendered( () => {
  Modules.client.createBuild({
    form: "#create_build_form",
    template: Template.instance()
  });
});

Template.dashboard.helpers({
  builds: function () {
    return Builds.find();
  }
});

Template.dashboard.events({
  'submit #create_build_form': (event) => {
    event.preventDefault();
    console.log('you submit a form', event);
  }
});
