import install from './install';
import parseArgs from './parse-args';
import {version} from '../package.json';

const info = (...args) => {
  console.info(`aurelia-types-installer ${version}`);
  console.info(args);
};

const help = 'Usage: ati install [--projectDir = .] [--framework = aurelia] [--dest = projectDir/jspm_packages/npm] [--explicitIndex = true]';

const args = parseArgs();

switch (args.command) {
  case 'version': info(version);
    break;
  case 'install':
  case 'i':
    install(args)
      .then(() => console.log('Complete'))
      .catch(console.error.bind(console));
    break;
  default:
    info(help);
    process.exit(0);
}

if (args.command !== 'install' && args.command !== 'i') {

}
