Meteor.subscribe('builds');

Template.buildList.onRendered( () => {
  Modules.client.createBuild({
    form: "#create_build_form",
    template: Template.instance()
  });
});

Template.buildList.helpers({
  builds: function () {
    return Builds.find();
  }
});

Template.buildList.events({
  'submit #create_build_form': (event) => {
    event.preventDefault();
    console.log('you submit a form', event);
  }
});
