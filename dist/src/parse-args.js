"use strict";
var minimist = require("minimist");
function default_1() {
    var _a = minimist(process.argv.slice(2)), project = _a.project, frameworkNameOrPrefix = _a.frameworkNameOrPrefix, dest = _a.dest;
    return { project: project, frameworkNameOrPrefix: frameworkNameOrPrefix, dest: dest };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=parse-args.js.map