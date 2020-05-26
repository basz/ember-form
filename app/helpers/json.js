import { helper } from '@ember/component/helper';
import { isNone } from '@ember/utils';

export default helper((params, hash) => {
  let [json] = params;
  let { pretty } = hash;

  if (json === undefined) {
    json = 'undefined';
  }

  pretty = isNone(pretty);

  return JSON.stringify(json, null, pretty ? 2 : null);
});
