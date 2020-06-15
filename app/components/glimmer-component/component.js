import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class BtnGroupCheckbox extends Component {
  @computed('args.value')
  get value() {
    console.log('glimmer-component got value updated', this.args.value);
    return this.args.value;
  }
}
