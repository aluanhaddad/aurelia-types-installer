"use strict";
function polyfillObjectAssign() {
    if (typeof Object.assign !== 'function') {
        Object.assign = function (target, ...args) {
            if (!target) {
                throw TypeError('Cannot convert undefined or null to object');
            }
            for (const source of args) {
                if (source) {
                    Object.keys(source).forEach(key => target[key] = source[key]);
                }
            }
            return target;
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = polyfillObjectAssign;
//# sourceMappingURL=object-assign.js.map