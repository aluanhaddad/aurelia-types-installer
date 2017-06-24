import install from './install';
import parseArgs from './parse-args';
import {version as atiVersion} from '../package.json';

const help = 'Usage: ati install [--projectDir = .] [--framework = aurelia] [--dest = projectDir/jspm_packages/npm] [--explicitIndex = true]';

const {command, framework, version, ...args} = parseArgs();

if (version) {
  info(atiVersion);
  process.exit(0);
}

switch (command) {

  case 'install':
  case 'i':
    info(`installing ${framework} typings...`);
    install({framework, ...args})
      .then(results => {
        info('\n', results.summary);
        return results;
      })
      .catch(console.error.bind(console));
    break;
  default:
    info(help);
    process.exit(0);
}

function info(...args: {}[]) {
  console.info(...args);
}