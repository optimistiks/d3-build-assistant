Meteor.methods({

  insertBuild(build) {

    check(build, Object);

    try {

      build.userId = Meteor.userId();
      return Builds.insert(build);

    } catch (exception) {
      return exception;
    }

  }

});
