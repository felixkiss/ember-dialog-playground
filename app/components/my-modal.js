import Ember from 'ember';

export default Ember.Component.extend({
  show: false,

  noop: Ember.K,

  close() {
    this.toggleProperty('show');
  },
});
