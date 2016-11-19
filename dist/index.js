"use strict";
var install_1 = require("./install");
var parse_args_1 = require("./parse-args");
var help = 'Usage: ati install [--projectDir = .] [--framework = aurelia] [--dest = projectDir/jspm_packages/npm] [--explicitIndex = true]';
var args = parse_args_1.default();
if (args.command !== 'install' && args.command !== 'i') {
    console.info(help);
    process.exit(0);
}
install_1.default(args)
    .then(function () { return console.log('Complete'); })
    .catch(console.error.bind(console));
//# sourceMappingURL=index.js.map