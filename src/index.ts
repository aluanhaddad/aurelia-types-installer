import install from './install';
import parseArgs from './parse-args';
import {version as atiVersion} from '../package.json';

const usage = 'Usage: ati install [--projectDir = .] [--framework = aurelia] [--dest = projectDir/jspm_packages/npm] [--explicitIndex = true]';

const {command, framework, version, help, ...args} = parseArgs();

(async function () {
  switch (command) {
    case 'install':
    case 'i':
      info(`Installing ${framework} type declarations...`);
      try {
        const results = await install({framework, ...args});
        info('\n');
        info(results.summary);
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
      }
  }

  function info(...args: {}[]) {
    console.info(...args);
  }
}());