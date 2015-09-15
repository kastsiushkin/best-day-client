import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      let name = this.get('name');
      let address = this.get('address');
      let description = this.get('description');

      let day = this.store.createRecord('day', {
        name: name,
        address: address,
        description: description
      });

      day.save();
      this.transitionTo('day', day);
    }
  }
});
