import Ember from 'ember';

export default Ember.Component.extend({
  show: false,

  _onVisibilityChange: Ember.observer('show', function() {
    Ember.$('body').toggleClass('modal-open', this.get('show'));
  }),

  noop: Ember.K,

  close() {
    this.toggleProperty('show');
  },
});
