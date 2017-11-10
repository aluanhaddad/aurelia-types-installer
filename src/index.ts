import chalk from 'chalk';

import thisPackage = require('../package.json');

import './polyfills/enhance';

import install from './install';
import parseArgs from './parse-args';

const {version: atiVersion} = thisPackage;

const usage = 'Usage: ati install [--projectDir = .] [--framework = aurelia] [--dest = projectDir/jspm_packages/npm] [--explicitIndex = true]';

const {command, framework, version, help, ...args} = parseArgs();

(async function (log, info, warn) {

  info(atiVersion);
  switch (command) {
    case 'install':
    case 'i':
      log(`Installing ${framework} type declarations...\n`);
      try {
        const {successSummary, failureSummary} = await install({framework, ...args});
        info(successSummary);
        warn(failureSummary);
      } catch (e) {
        console.error.bind(e);
      }
      break;
    default:
      if (version) {
        info(atiVersion);
        process.exit(0);
      } else if (help) {
        info(usage);
        process.exit(0);
      } else {
        info(usage);
      }
  }
}(chalk.blue.bind(chalk), chalk.green.bind(chalk), chalk.yellow.bind(chalk)));

declare global {
  interface Function {
    // tslint:disable-next-line:no-any
    bind<T extends this>(this: T, ...args: any[]): typeof this;
  }
}