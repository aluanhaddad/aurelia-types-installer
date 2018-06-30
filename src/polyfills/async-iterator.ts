export default function polyfillSymbolAsyncIterator() {
  if (!Symbol.asyncIterator) {
    (<{ asyncIterator?: symbol }>Symbol).asyncIterator = Symbol.for(
      'Symbol.asyncIterator'
    );
  }
}
