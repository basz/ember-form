import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BtnGroupCheckbox extends Component {
  @tracked _value;

  @action
  doUpdate(element, [value]) {
    console.log('glimmer-component-with-modifier got value updated', value);
    this._value = value;
  }
}
