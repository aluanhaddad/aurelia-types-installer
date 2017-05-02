"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minimist = require("minimist");
function parseArgs() {
    var _a = minimist(process.argv.slice(2), {
        alias: { install: 'i' },
        default: {
            projectDir: '.',
            framework: 'aurelia',
            dest: 'jspm_packages/npm',
            explicitIndex: true
        },
        '--': true
    }), command = _a._[0], projectDir = _a.projectDir, framework = _a.framework, dest = _a.dest, explicitIndex = _a.explicitIndex;
    return { command: command, projectDir: projectDir, framework: framework, dest: dest, explicitIndex: explicitIndex };
}
exports.default = parseArgs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UtYXJncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZS1hcmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXNDO0FBRXRDO0lBQ1EsSUFBQTs7Ozs7Ozs7O01BU0osRUFUUyxpQkFBTyxFQUFHLDBCQUFVLEVBQUUsd0JBQVMsRUFBRSxjQUFJLEVBQUUsZ0NBQWEsQ0FTNUQ7SUFDSCxNQUFNLENBQUMsRUFBQyxPQUFPLFNBQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxhQUFhLGVBQUEsRUFBQyxDQUFDO0FBQy9ELENBQUM7QUFaRCw0QkFZQyJ9