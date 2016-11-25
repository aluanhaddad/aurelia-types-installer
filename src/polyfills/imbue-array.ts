export default function imbue() {
  Array.prototype.flatMap = function flatMap<R, S>(
    this, elementToArray?: (x) => R[],
    projection?: (x: R) => S) {
    const elementSelector = projection || ((e: any) => e);
    const arraySelector = elementToArray || (a => {
      if (!Array.isArray(a)) {
        throw TypeError('No projection to array provided and "this" and element');
      }
      return a.map(elementSelector);
    });
    return this.map(arraySelector).reduce((x, y) => x.concat(y), []);
  };
}

declare global {
  export interface Array<T> {
    flatMap<TThis extends T[], R, S>(this: this, elementToArray: (x: T) => R[], projection: (x: R) => S): S[];
    flatMap<TThis extends T[], R>(this: this, elementToArray: (x: T) => R[]): R[];
  }
}