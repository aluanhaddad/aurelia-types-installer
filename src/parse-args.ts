import minimist = require('minimist');
export default function () {
  const { projectDir, framework, dest, _ } = minimist(process.argv.slice(2), {
    alias: { install: 'i' }, default: {
      projectDir: '.',
      framework: 'aurelia',
      dest: 'types'
    },
    '--': true
  });
  return { command: _[0], projectDir, framework, dest };
}