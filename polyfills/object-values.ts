export default function polyfillObjectValues() {
    if (typeof Object.values !== 'function') {
        Object.values = o => {
            if (!Object) {
                throw TypeError('Cannot convert undefined or null to object');
            }
            return Object.keys(o).map(key => o[key]);
        };
    }
}

declare global {
    export interface ObjectConstructor {
        values(o: any): any[];
    }
}