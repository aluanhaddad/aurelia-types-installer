"use strict";
const minimist = require("minimist");
function default_1() {
    const { _, projectDir, framework, dest, explicitIndex } = minimist(process.argv.slice(2), {
        alias: { install: 'i' }, default: {
            projectDir: '.',
            framework: 'aurelia',
            dest: 'types',
            explicitIndex: true
        },
        '--': true
    });
    return { command: _[0], projectDir, framework, dest, explicitIndex };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=parse-args.js.map