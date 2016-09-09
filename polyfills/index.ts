import addObjectAssign from './object-assign';
import addObjectEntries from './object-entries';
import addObjectValues from './object-values';
import imbueArray from './imbue-array';
export {
    addObjectAssign,
    addObjectEntries,
    addObjectValues,
    imbueArray
}
export default function addObjectPolyfills() {
    addObjectAssign();
    addObjectEntries();
    addObjectValues();
}