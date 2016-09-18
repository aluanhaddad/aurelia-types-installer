import install from './install';
import parseArgs from './parse-args';

const help = 'Usage: ati install [--projectDir = .] [--framework = aurelia] [--dest = projectDir/types] [--explicitIndex = true]';

const args = parseArgs();

if (args.command !== 'install' && args.command !== 'i') {
  console.info(help);
  process.exit(0);
}
install(args)
  .then(() => console.log('Complete'))
  .catch(console.error.bind(console));