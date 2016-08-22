'use strict';
if (typeof Object.entries !== 'function') {
    Object.entries = o => Object.keys(o).map(key => [key, o[key]] as [string, any]);

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
interface ObjectConstructor {
    entries(o): [string, any][];
    values(o): any[];
}