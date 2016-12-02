import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingDialog: false,
  modalSize: undefined,

  actions: {
    toggleDialog() {
      this.toggleProperty('isShowingDialog');
    },
  },
});
