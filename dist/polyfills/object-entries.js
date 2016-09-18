"use strict";
function polyfillObjectEntries() {
    if (typeof Object.entries !== 'function') {
        Object.entries = o => Object.keys(o).map(key => [key, o[key]]);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = polyfillObjectEntries;
//# sourceMappingURL=object-entries.js.map