import chalk from 'chalk';

import thisPackage from '../package.json';

import install from './install';
import parseArgs from './parse-args';
import './polyfills/enhance';

const {version: atiVersion} = thisPackage;

const usage = 'Usage: ati install [--projectDir = .] [--framework = aurelia] [--dest = projectDir/jspm_packages/npm] [--explicitIndex = false]';

const {command, framework, version, help, ...args} = parseArgs();

(async function () {
  const log = (...x: string[]) => console.log(chalk.blue(...x));
  const info = (...x: string[]) => console.info(chalk.green(...x));
  const warn = (...x: string[]) => console.warn(chalk.yellow(...x));
  const error = (...x: string[]) => console.error(chalk.red(...x));

  switch (command) {
    case 'install':
    case 'i':
      info(atiVersion);
      log(`Installing ${framework} type declarations...\n`);
      try {
        const {successSummary, failureSummary} = await install({framework, ...args});
        info(successSummary);
        warn(failureSummary);
      } catch (e) {
        error(e);
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
}());

declare global {
  interface Function {
    // tslint:disable-next-line:no-any
    bind<T extends this>(this: T, ...args: any[]): typeof this;
  }
}