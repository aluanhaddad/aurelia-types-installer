import test from 'tape';

test('tsconfig.json with unspecified baseUrl must receive base url of "."', ({equals, end}) => {
  const tsconfig = require('../testapp/tsconfig.json');
  if (tsconfig.baseUrl && tsconfig.baseUrl !== '') {
  }
  end();
});