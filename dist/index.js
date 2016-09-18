"use strict";
const install_1 = require("./install");
const parse_args_1 = require("./parse-args");
const help = 'Usage: ati install [--projectDir = "."] [--framework = "aurelia"] [--dest = "projectDir/types"]';
const args = parse_args_1.default();
if (args.command !== 'install' && args.command !== 'i') {
    console.info(help);
    process.exit(0);
}
install_1.default(args.projectDir, args.framework, args.dest)
    .then(() => console.log('Complete'))
    .catch(console.error.bind(console));
//# sourceMappingURL=index.js.map