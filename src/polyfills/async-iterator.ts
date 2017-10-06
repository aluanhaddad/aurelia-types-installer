export default function polyfillSymbolAsyncIterator() {
  (Symbol as {asyncIterator?: symbol}).asyncIterator = Symbol.asyncIterator || Symbol.for('Symbol.asyncIterator');
}