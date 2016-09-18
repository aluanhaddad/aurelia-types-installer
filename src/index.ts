import install from './install';
import parseArgs from './parse-args';
const instructions = 'Usage: ati [--projectDir = "."] [--framework = "aurelia"] [--dest = "projectDir/types"]';
const args = parseArgs();
console.log(args);
if (!args.projectDir || !args.dest) {
    console.info(instructions);
    process.exit(0);
}
install(args.projectDir || './', args.framework || 'aurelia', args.dest || 'types')
    .then(() => console.log('Complete'))
    .catch(console.error.bind(console));