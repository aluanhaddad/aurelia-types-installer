import 'flat-map-polyfill';

import polyfillSymbolAsyncIterator from './async-iterator';
import addObjectAssign from './object-assign';
import addObjectEntries from './object-entries';
import addObjectValues from './object-values';

export default function addObjectPolyfills() {
  polyfillSymbolAsyncIterator();
  addObjectAssign();
  addObjectEntries();
  addObjectValues();
}