import chalk = require('chalk');
import install from './install';
import parseArgs from './parse-args';
import {version as atiVersion} from '../package.json';

const usage = 'Usage: ati install [--projectDir = .] [--framework = aurelia] [--dest = projectDir/jspm_packages/npm] [--explicitIndex = true]';

const {command, framework, version, help, ...args} = parseArgs();

(async function () {
  const log = (...x: {}[]) => console.log(chalk.blue(...x));
  const info = (...x: {}[]) => console.info(chalk.green(...x));
  const warn = (...x: {}[]) => console.warn(chalk.yellow(...x));
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
}());
