import DS from 'ember-data';

const { Model, attr } = DS;
import { fragment } from 'ember-data-model-fragments/attributes';

export default class Root extends Model {
  @attr('string', {
    defaultValue: () => {
      return '1';
    }
  })
  prop;

  @fragment('child', {
    defaultValue: () => {
      return '1';
    }
  })
  child;
}
