import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('days', function() {
    this.resource('day', {path: '/:day_id'});
  });
});

export default Router;
