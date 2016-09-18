import minimist = require('minimist');
export default function () {
  const {  _, projectDir, framework, dest, explicitIndex } = minimist(process.argv.slice(2), {
    alias: { install: 'i' }, default: {
      projectDir: '.',
      framework: 'aurelia',
      dest: 'types',
      explicitIndex: true
    },
    '--': true
  });
  return { command: _[0], projectDir, framework, dest, explicitIndex };
}