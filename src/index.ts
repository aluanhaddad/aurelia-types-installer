import install from './install';
import parseArgs from './parse-args';
import {version} from '../package.json';

const help = 'Usage: ati install [--projectDir = .] [--framework = aurelia] [--dest = projectDir/jspm_packages/npm] [--explicitIndex = true]';

const {command, ...args} = parseArgs();

switch (command) {
  case 'version': info(version);
    break;
  case 'install':
  case 'i':
    install(args)
      .then(info.bind('Complete'))
      .catch(console.error.bind(console));
    break;
  default:
    info(help);
    process.exit(0);
}

function info(...args: {}[]) {
  console.info(`aurelia-types-installer ${version}`);
  console.info(args);
}