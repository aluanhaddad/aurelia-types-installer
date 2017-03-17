"use strict";
var install_1 = require("./install");
var parse_args_1 = require("./parse-args");
var package_json_1 = require("../package.json");
var info = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.info("aurelia-types-installer " + package_json_1.version);
    console.info(args);
};
var help = 'Usage: ati install [--projectDir = .] [--framework = aurelia] [--dest = projectDir/jspm_packages/npm] [--explicitIndex = true]';
var args = parse_args_1.default();
switch (args.command) {
    case 'version':
        info(package_json_1.version);
        break;
    case 'install':
    case 'i':
        install_1.default(args)
            .then(function () { return console.log('Complete'); })
            .catch(console.error.bind(console));
        break;
    default:
        info(help);
        process.exit(0);
}
if (args.command !== 'install' && args.command !== 'i') {
}
//# sourceMappingURL=index.js.map