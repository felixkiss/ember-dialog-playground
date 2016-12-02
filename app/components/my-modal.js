import Ember from 'ember';

export default Ember.Component.extend({
  show: false,
  onClose: undefined,

  init() {
    this._super(...arguments);
    if (!this.get('onClose')) {
      this.set('onClose', () => {
        this.toggleProperty('show');
      });
    }
  },

  outsideApi: Ember.computed(function() {
    return {
      close: this.get('actions.close').bind(this),
    };
  }),

  actions: {
    close() {
      this.get('onClose')();
    },
    doNothing() {},
  },
});
