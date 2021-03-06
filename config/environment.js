/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'best-day-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    modulePrefix: 'best-day-client',
    podModulePrefix: 'best-day-client/pods',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiHostname = 'http://localhost:3000',
    ENV.contentSecurityPolicy = {
      'default-src': "none",
      'script-src': "'self' 'unsafe-inline'",
      'font-src': "'self'",
      'connect-src': "'self' ws://0.0.0.0:49152 ws://localhost:49152 http://localhost:3000",
      'img-src': "'self' https://raw.githubusercontent.com",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'",
      'frame-src': "none"
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
