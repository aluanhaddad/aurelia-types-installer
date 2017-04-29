import minimist = require('minimist');
import {InstallOptions} from './install';
export default function parseArgs() {
  const {_: [command], projectDir, framework, dest, explicitIndex} = minimist(process.argv.slice(2), {
    alias: {install: 'i'},
    default: {
      projectDir: '.',
      framework: 'aurelia',
      dest: 'jspm_packages/npm',
      explicitIndex: true
    },
    '--': true
  });
  return {command, projectDir, framework, dest, explicitIndex};
}

declare module 'minimist' {
  function minimist(args?: string[], opts?: minimist.Opts): {[P in keyof InstallOptions]?: InstallOptions[P]};
}