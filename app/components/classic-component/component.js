import classic from 'ember-classic-decorator';
import Component from '@ember/component';

@classic
export default class BtnGroupCheckbox extends Component {
  set value(value) {
    console.log('classic-component got value updated', value);
    this._value = value;
  }
  get value() {
    return this._value;
  }
}
