"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minimist = require("minimist");
function parseArgs() {
    var _a = minimist(process.argv.slice(2), {
        alias: { install: 'i', version: 'v' },
        default: {
            projectDir: '.',
            framework: 'aurelia',
            dest: 'jspm_packages/npm',
            explicitIndex: true
        },
        '--': true
    }), command = _a._[0], projectDir = _a.projectDir, framework = _a.framework, dest = _a.dest, explicitIndex = _a.explicitIndex, version = _a.version;
    return { command: command, projectDir: projectDir, framework: framework, dest: dest, explicitIndex: explicitIndex, version: version };
}
exports.default = parseArgs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UtYXJncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZS1hcmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXNDO0FBR3RDO0lBQ1EsSUFBQTs7Ozs7Ozs7O01BU0osRUFUUyxpQkFBTyxFQUFHLDBCQUFVLEVBQUUsd0JBQVMsRUFBRSxjQUFJLEVBQUUsZ0NBQWEsRUFBRSxvQkFBTyxDQVNyRTtJQUNILE1BQU0sQ0FBQyxFQUFDLE9BQU8sU0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLGFBQWEsZUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFDLENBQUM7QUFDeEUsQ0FBQztBQVpELDRCQVlDIn0=