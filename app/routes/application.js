import Route from '@ember/routing/route';
import Changeset from 'ember-changeset';

export default class ApplicationRoute extends Route {
  model() {
    const model = { prop: null, prop2: 'A', prop3: 10, prop4: 11 };
    const changeset = new Changeset(model);

    return { model, changeset };
  }

  setupController(controller, model) {
    controller.setProperties(model);
  }
}
