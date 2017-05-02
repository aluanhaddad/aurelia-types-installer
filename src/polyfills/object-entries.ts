export default function polyfillObjectEntries() {
  if (typeof Object.entries !== 'function') {
    // tslint:disable-next-line:no-any
    Object.entries = function (o: any) {
      return Object.keys(o).map(key => [key, o[key]] as [string, {}]);
    };
  }
}