const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'login' );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});

authenticatedRoutes.route( '/build-edit/:id', {
  name: 'build-form',
  action() {
    BlazeLayout.render( 'default', { yield: 'build-form' } );
  }
});

authenticatedRoutes.route( '/build-view/:id', {
  name: 'build-view',
  action() {
    BlazeLayout.render( 'default', { yield: 'build-view' } );
  }
});
