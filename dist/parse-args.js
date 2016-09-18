"use strict";
var minimist = require("minimist");
function default_1() {
    var _a = minimist(process.argv.slice(2), {
        alias: { install: 'i' }, default: {
            projectDir: '.',
            framework: 'aurelia',
            dest: 'types',
            explicitIndex: true
        },
        '--': true
    }), _ = _a._, projectDir = _a.projectDir, framework = _a.framework, dest = _a.dest, explicitIndex = _a.explicitIndex;
    return { command: _[0], projectDir: projectDir, framework: framework, dest: dest, explicitIndex: explicitIndex };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=parse-args.js.map