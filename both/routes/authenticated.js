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

authenticatedRoutes.route('/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render('default', {yield: 'dashboard'});
  }
});

authenticatedRoutes.route('/build-edit/:_id', {
  name: 'build-edit',
  action() {
    BlazeLayout.render('default', {yield: 'build-edit'});
  }
});

authenticatedRoutes.route('/build-view/:_id', {
  name: 'build-view',
  action() {
    BlazeLayout.render('default', {yield: 'build-view'});
  }
});
