export default function polyfillObjectAssign() {
  if (typeof Object.assign !== 'function') {
    // tslint:disable-next-line:no-any
    Object.assign = function (target: any, ...args: any[]) {
      if (!target) {
        throw TypeError('Cannot convert undefined or null to object');
      }
      for (const source of args) {
        if (source) {
          Object.keys(source).forEach(key => target[key] = source[key]);
        }
      }
      return target;
    };
  }
}