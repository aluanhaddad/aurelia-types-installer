export default function polyfillObjectValues() {
  if (typeof Object.values !== 'function') {
    // tslint:disable-next-line:no-any
    Object.values = function (o: any) {
      if (!Object) {
        throw TypeError('Cannot convert undefined or null to object');
      }
      return Object.keys(o).map(key => o[key]);
    };
  }
}