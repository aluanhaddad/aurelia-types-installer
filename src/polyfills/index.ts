import 'flat-map-polyfill';
import addObjectAssign from './object-assign';
import addObjectEntries from './object-entries';
import addObjectValues from './object-values';
export {
  addObjectAssign,
  addObjectEntries,
  addObjectValues,
};
export default function addObjectPolyfills() {
  addObjectAssign();
  addObjectEntries();
  addObjectValues();
}