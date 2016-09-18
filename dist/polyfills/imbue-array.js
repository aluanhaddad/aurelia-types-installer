"use strict";
function imbue() {
    Array.prototype.flatMap = function flatMap(elementToArray, projection) {
        const elementSelector = projection || ((e) => e);
        const arraySelector = elementToArray || ((a, index) => {
            if (Array.isArray(a)) {
                return a.map(elementSelector);
            }
            else {
                throw TypeError('No projection to array provided and "this" and element');
            }
        });
        return this.map(arraySelector).reduce((x, y) => x.concat(y), []);
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = imbue;
//# sourceMappingURL=imbue-array.js.map