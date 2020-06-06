import Component from '@glimmer/component';

export default class BtnGroupCheckbox extends Component {
  set value(value) {
    console.log('glimmer-component got value updated', value);
  }
}
