export default function polyfillObjectEntries() {
  if (typeof Object.entries !== 'function') {
    // tslint:disable-next-line:no-any
    Object.entries = (o: any) => Object.keys(o).map(key => [key, o[key]] as [string, any]);
  }
}