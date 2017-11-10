import minimist = require('minimist');

import {InstallOptions} from './install';

export default function parseArgs() {
  const {_: [command], projectDir, framework, dest, explicitIndex, version, help} = minimist(process.argv.slice(2), {
    'alias': {install: 'i', version: 'v', help: 'h'},
    'default': {
      projectDir: '.',
      framework: 'aurelia',
      dest: 'jspm_packages/npm',
      explicitIndex: true
    },
    'boolean': ['explicitIndex'],
    '--': true
  });
  return {command, projectDir, framework, dest, explicitIndex, version, help};
}

declare module 'minimist' {
  function minimist(args?: string[], opts?: minimist.Opts): {[P in keyof InstallOptions]?: InstallOptions[P]};
}