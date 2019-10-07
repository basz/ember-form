import Fragment from 'ember-data-model-fragments/fragment';
import DS from 'ember-data';

const { attr } = DS;

export default Fragment.extend({
  prop: attr('string', {
    defaultValue: () => {
      return '1';
    }
  })
});
