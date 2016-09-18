import minimist = require('minimist');
export default function () {
    const {projectDir, framework, dest } = minimist(process.argv.slice(2));
    return { projectDir, framework, dest };
}