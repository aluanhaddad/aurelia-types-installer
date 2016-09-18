"use strict";
const minimist = require("minimist");
function default_1() {
    const { project, frameworkNameOrPrefix, dest } = minimist(process.argv.slice(2));
    return { project, frameworkNameOrPrefix, dest };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=parse-args.js.map