import minimist = require('minimist');
export default function () {
    const args = minimist(process.argv.slice(2));
    console.table(args);
    return args;
}