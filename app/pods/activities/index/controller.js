// Just testing exposing parent model to a child

import Ember from 'ember';

export default Ember.Controller.extend({
  dayController: Ember.inject.controller('day'),
  day: Ember.computed.reads('dayController.model'),
  activities: Ember.computed.reads('dayController.model.activities')
});
