const authenticatedRedirect = () => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    FlowRouter.go('login');
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [authenticatedRedirect]
});

authenticatedRoutes.route('/', {
  name: 'index',
  action() {
    BlazeLayout.render('default', {yield: 'index'});
  }
});

authenticatedRoutes.route('/build-list', {
  name: 'build-list',
  action() {
    BlazeLayout.render('default', {yield: 'buildList'});
  }
});

authenticatedRoutes.route('/build-edit/:_id', {
  name: 'build-edit',
  action() {
    BlazeLayout.render('default', {yield: 'buildEdit'});
  }
});

authenticatedRoutes.route('/build-view/:_id', {
  name: 'build-view',
  action() {
    BlazeLayout.render('default', {yield: 'buildView'});
  }
});
