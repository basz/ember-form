import DS from 'ember-data';
import { v4 as uuidv4 } from 'uuid';
import { resolve } from 'rsvp';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
  generateIdForRecord() {
    return uuidv4();
  },

  createRecord(store, type, snapshot) {
    return resolve();
  },

  updateRecord(store, type, snapshot) {
    return resolve();
  },

  deleteRecord(store, type, snapshot) {
    return resolve();
  }
});
