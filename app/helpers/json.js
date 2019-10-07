import { helper } from '@ember/component/helper';
import { isNone } from '@ember/utils';

export default helper((params, hash) => {
  const [json] = params;
  let { pretty } = hash;

  pretty = isNone(pretty);

  return JSON.stringify(json, null, pretty ? 2 : null);
});
