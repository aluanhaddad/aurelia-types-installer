export default function polyfillObjectEntries() {
  if (typeof Object.entries !== 'function') {
    Object.entries = o => Object.keys(o).map(key => [key, o[key]] as [string, any]);
  }
}