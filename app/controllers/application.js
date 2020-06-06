import { action, set } from '@ember/object';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  @action
  onSubmit() {}

  @action
  clicked(value) {
    this.changeset.set('prop', value);
  }
}
