'use strict';
if (typeof Object.entries !== 'function') {
    Object.entries = o => Object.keys(o).map(key => [key, o[key]] as [string, any]);

}
if (typeof Object.values !== 'function') {
    Object.values = o => Object.entries(o).map(e => e[1]);
}
if (typeof Object.assign !== 'function') {
    Object.assign = (target) => {
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
        return this.reduce(async (resolved, promise) => {
            const data = await promise;
            return (resolved || []).concat(data);
        }, []);
    };
}

interface Array<T> {
    whenAll(): this;
}
interface ObjectConstructor {
    entries(o): [string, any][];
    values(o): any[];
}

