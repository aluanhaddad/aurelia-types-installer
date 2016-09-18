"use strict";
function polyfillObjectValues() {
    if (typeof Object.values !== 'function') {
        Object.values = o => {
            if (!Object) {
                throw TypeError('Cannot convert undefined or null to object');
            }
            return Object.keys(o).map(key => o[key]);
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = polyfillObjectValues;
//# sourceMappingURL=object-values.js.map