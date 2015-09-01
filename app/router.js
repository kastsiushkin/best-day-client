import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('days', {path: '/days'});
  this.resource('day', {path: '/day/:day_id'}, function() {
    this.resource('activities', function(){});
  });
});

export default Router;
