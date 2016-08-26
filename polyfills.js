'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
if (typeof Object.entries !== 'function') {
    Object.entries = o => Object.keys(o).map(key => [key, o[key]]);
}
if (typeof Object.values !== 'function') {
    Object.values = o => Object.entries(o).map(e => e[1]);
}
if (typeof Object.assign !== 'function') {
    Object.assign = function (target) {
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}
if (typeof Array.prototype.whenAll !== 'function') {
    Array.prototype.whenAll = function () {
        return this.reduce((resolved, promise) => __awaiter(this, void 0, void 0, function* () {
            const data = yield promise;
            return (resolved || []).concat(data);
        }), []);
    };
}
//# sourceMappingURL=polyfills.js.map