import DS from 'ember-data';

const attr = DS.attr,
      belongsTo = DS.belongsTo;

export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  address: attr('string'),
  day: belongsTo('day')
});
