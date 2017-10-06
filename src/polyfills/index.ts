import 'flat-map-polyfill';
import addObjectAssign from './object-assign';
import addObjectEntries from './object-entries';
import addObjectValues from './object-values';
import polyfillSymbolAsyncIterator from './async-iterator';
export {
  addObjectAssign,
  addObjectEntries,
  addObjectValues,
};
export default function addObjectPolyfills() {
  polyfillSymbolAsyncIterator();
  addObjectAssign();
  addObjectEntries();
  addObjectValues();
}