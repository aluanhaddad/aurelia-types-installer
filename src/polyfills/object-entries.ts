export default function polyfillObjectEntries() {
  if (typeof Object.entries !== 'function') {
    Object.entries = o => Object.keys(o).map(key => [key, o[key]] as [string, any]);
  }
}

declare global {
  export interface ObjectConstructor {
    entries<T>(o: { [key: string]: T }): [string, T][];
    entries(o): [string, any][];
  }
}