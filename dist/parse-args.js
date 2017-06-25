"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minimist = require("minimist");
function parseArgs() {
    var _a = minimist(process.argv.slice(2), {
        alias: { install: 'i', version: 'v', help: 'h' },
        default: {
            projectDir: '.',
            framework: 'aurelia',
            dest: 'jspm_packages/npm',
            explicitIndex: true
        },
        boolean: ['explicitIndex'],
        '--': true
    }), command = _a._[0], projectDir = _a.projectDir, framework = _a.framework, dest = _a.dest, explicitIndex = _a.explicitIndex, version = _a.version, help = _a.help;
    return { command: command, projectDir: projectDir, framework: framework, dest: dest, explicitIndex: explicitIndex, version: version, help: help };
}
exports.default = parseArgs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UtYXJncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZS1hcmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXNDO0FBR3RDO0lBQ1EsSUFBQTs7Ozs7Ozs7OztNQVVKLEVBVlMsaUJBQU8sRUFBRywwQkFBVSxFQUFFLHdCQUFTLEVBQUUsY0FBSSxFQUFFLGdDQUFhLEVBQUUsb0JBQU8sRUFBRSxjQUFJLENBVTNFO0lBQ0gsTUFBTSxDQUFDLEVBQUMsT0FBTyxTQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsYUFBYSxlQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUMsQ0FBQztBQUM5RSxDQUFDO0FBYkQsNEJBYUMifQ==