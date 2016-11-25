"use strict";
function imbue() {
    Array.prototype.flatMap = function flatMap(elementToArray, projection) {
        var elementSelector = projection || (function (e) { return e; });
        var arraySelector = elementToArray || (function (a) {
            if (!Array.isArray(a)) {
                throw TypeError('No projection to array provided and "this" and element');
            }
            return a.map(elementSelector);
        });
        return this.map(arraySelector).reduce(function (x, y) { return x.concat(y); }, []);
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = imbue;
//# sourceMappingURL=imbue-array.js.map