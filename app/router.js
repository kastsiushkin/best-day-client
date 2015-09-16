import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('days', {path: '/days'}, function() {
    this.route('new');
  });
  this.route('day', {path: '/days/:day_id'}, function() {
    this.route('activities', { resetNamespace: true })
  });
});

export default Router;
