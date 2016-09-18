"use strict";
function imbue() {
    Array.prototype.flatMap = function flatMap(elementToArray, projection) {
        var elementSelector = projection || (function (e) { return e; });
        var arraySelector = elementToArray || (function (a, index) {
            if (Array.isArray(a)) {
                return a.map(elementSelector);
            }
            else {
                throw TypeError('No projection to array provided and "this" and element');
            }
        });
        return this.map(arraySelector).reduce(function (x, y) { return x.concat(y); }, []);
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = imbue;
//# sourceMappingURL=imbue-array.js.map