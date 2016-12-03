import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-modal', 'Integration | Component | my modal', {
  integration: true
});

test('it can show modal', function(assert) {
  this.set('show', false);

  this.render(hbs`
    {{#my-modal show=show}}
      <span class="foo">bar</span>
    {{/my-modal}}
  `);

  assert.equal(this.$('.foo').length, 0, 'should not show foo');

  this.set('show', true);

  assert.equal(this.$('.foo').length, 1, 'should show foo');
});

test('it yields action to close modal', function(assert) {
  this.set('show', true);

  this.render(hbs`
    {{#my-modal show=show as |modal|}}
      <button {{action modal.close}} class="close">close</button>
    {{/my-modal}}
  `);

  this.$('.close').click();

  assert.equal(this.get('show'), false, 'modal should not be shown');
});
