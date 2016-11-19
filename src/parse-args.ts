import minimist = require('minimist');
export default function () {
  const {  _, projectDir, framework, dest, explicitIndex } = minimist(process.argv.slice(2), {
    alias: { install: 'i' }, default: {
      projectDir: '.',
      framework: 'aurelia',
      dest: 'jspm_packages/npm',
      explicitIndex: true
    },
    '--': true
  });
  return { command: _[0], projectDir, framework, dest, explicitIndex };
}