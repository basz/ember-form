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
    const model = { prop: null, prop2: null, child: { prop: null, prop2: null } };

    // try these both changeset model...
    const changeset = new Changeset(model, lookupValidator(validations), validations);
    // const changeset = new Changeset(root, lookupValidator(validations), validations);

    return { model, changeset };
  }

  setupController(controller, model) {
    controller.setProperties(model);
  }
}
