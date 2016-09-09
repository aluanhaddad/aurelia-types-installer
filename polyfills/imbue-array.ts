export default function imbue() {
    Array.prototype.flatMap = function flatMap<R, S>(
        this, elementToArray?: (x) => R[],
        projection?: (x: R) => S) {
        const elementSelector = projection || ((e: any) => e);
        const arraySelector = elementToArray || ((a, index) => {
            if (Array.isArray(a)) {
                return a.map(elementSelector);
            } else {
                throw TypeError('No projection to array provided and "this" and element');
            }
        });
        return this.map(arraySelector).reduce((x, y) => x.concat(y), []);
    };

    Array.prototype.toMap = function toMap<T, K>(keySelector: (x: T) => K) {
        return new Map<K, T>(this.map(e => [keySelector(e), e]));
    };
}

declare global {
    export interface Array<T> {
        groupBy(keySelector: (x: T) => string): {
            [key: string]: T[]
        };
        groupBy(keySelector: (x: T) => string): {
            [key: number]: T[]
        };
        toMap<K>(this: this, keySelector: (x: T) => K): Map<K, T>;
        flatMap<TThis extends T[], R, S>(this: this, elementToArray: (x: T) => R[], projection: (x: R) => S): S[];
        flatMap<TThis extends T[], R>(this: this, elementToArray: (x: T) => R[]): R[];
    }
}