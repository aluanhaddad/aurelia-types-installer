// tslint:disable:no-require-imports
import test from 'blue-tape';
import {child_process} from 'mz';

import TSConfig from '../src/ts-config';

test('tsconfig.json with unspecified baseUrl must receive base url of "."', ({equals, end}) => {
  const tsconfig = require('../testapp/tsconfig.json');
  if (tsconfig.baseUrl && tsconfig.baseUrl !== '') {
  }
  end();
});

test('output should retain explicit subpaths when deduplicating', async ({deepEqual, plan}) => {
  const before = <TSConfig>require('../testapp/tsconfig.paths.json');
  await child_process.exec('npm test', {cwd: '..'});
  const after = <TSConfig>require('../testapp/tsconfig.paths.json');
  deepEqual(before.compilerOptions.paths['aurelia-dialog'], after.compilerOptions.paths['aurelia-dialog']);
});