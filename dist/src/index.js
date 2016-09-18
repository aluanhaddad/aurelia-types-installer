"use strict";
var install_1 = require("./install");
var parse_args_1 = require("./parse-args");
var args = parse_args_1.default();
console.log(args);
if (!args.project || !args.dest) {
    console.info('Usage install-jspm-typings --project "./path-to-project" --frameworkNameOrPrefix aurelia --dest "typings"');
    process.exit(0);
}
install_1.default(args.project, args.frameworkNameOrPrefix, args.dest || 'typings').then(console.log);
//# sourceMappingURL=index.js.map