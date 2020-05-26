import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import { validatePresence } from 'ember-changeset-validations/validators';

const validations = {
  prop: [validatePresence({ presence: true, allowBlank: true })],
  child: { prop: [validatePresence({ presence: true, allowBlank: true })] },
  fragment: { prop: [validatePresence({ presence: true, allowBlank: true })] }
};

export default class ApplicationRoute extends Route {
  @service
  store;

  async model() {
    // create child (is a fragment)
    const childFragment = this.store.createFragment('child');

    // create root, with relationship and fragment
    const root = this.store.createRecord('root', { childFragment });

    await root.save();

    // try these both changeset model...
    const changeset = new Changeset({ child: { prop: null } }, lookupValidator(validations), validations);
    // const changeset = new Changeset(root, lookupValidator(validations), validations);

    return { model: root, changeset };
  }

  setupController(controller, model) {
    controller.setProperties(model);
  }
}
