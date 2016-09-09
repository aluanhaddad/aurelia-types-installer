"use strict";
const minimist = require("minimist");
function default_1() {
    const args = minimist(process.argv.slice(2));
    console.table(args);
    return args;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=parse-args.js.map