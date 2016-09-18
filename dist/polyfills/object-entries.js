"use strict";
function polyfillObjectEntries() {
    if (typeof Object.entries !== 'function') {
        Object.entries = function (o) { return Object.keys(o).map(function (key) { return [key, o[key]]; }); };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = polyfillObjectEntries;
//# sourceMappingURL=object-entries.js.map