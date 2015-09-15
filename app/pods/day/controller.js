import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(day) {
      day.destroyRecord().then(() => {
        this.transitionTo('days');
      });
    }
  }
});
