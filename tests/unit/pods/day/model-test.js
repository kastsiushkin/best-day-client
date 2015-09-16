import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('day', 'Unit | Model | day', {
  // Specify the other units that are required for this test.
  needs: ['model:activity']
});

test('Day model exists', function(assert) {
  var day = this.subject();
  assert.ok(!!day);
});

test('activity relationship', function(assert) {
  var Day = this.store().modelFor('day');
  var relationship = Ember.get(Day, 'relationshipsByName').get('activities');
  assert.equal(relationship.key, 'activities', 'Relationship key is "activities"');
  assert.equal(relationship.kind, 'hasMany', "Relationship kind is hasMany");
});
