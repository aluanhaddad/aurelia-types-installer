"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var install_1 = require("./install");
var parse_args_1 = require("./parse-args");
var package_json_1 = require("../package.json");
var help = 'Usage: ati install [--projectDir = .] [--framework = aurelia] [--dest = projectDir/jspm_packages/npm] [--explicitIndex = true]';
var _a = parse_args_1.default(), command = _a.command, framework = _a.framework, version = _a.version, args = __rest(_a, ["command", "framework", "version"]);
if (version) {
    info(package_json_1.version);
    process.exit(0);
}
switch (command) {
    case 'install':
    case 'i':
        info("installing " + framework + " typings...");
        install_1.default(__assign({ framework: framework }, args))
            .then(function (results) {
            info('\n', results.summary);
            return results;
        })
            .catch(console.error.bind(console));
        break;
    default:
        info(help);
        process.exit(0);
}
function info() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.info.apply(console, args);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFnQztBQUNoQywyQ0FBcUM7QUFDckMsZ0RBQXNEO0FBRXRELElBQU0sSUFBSSxHQUFHLGdJQUFnSSxDQUFDO0FBRTlJLElBQU0sMkJBQW9ELEVBQW5ELG9CQUFPLEVBQUUsd0JBQVMsRUFBRSxvQkFBTyxFQUFFLHNEQUFzQixDQUFDO0FBRTNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDWixJQUFJLENBQUMsc0JBQVUsQ0FBQyxDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQUVELE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFaEIsS0FBSyxTQUFTLENBQUM7SUFDZixLQUFLLEdBQUc7UUFDTixJQUFJLENBQUMsZ0JBQWMsU0FBUyxnQkFBYSxDQUFDLENBQUM7UUFDM0MsaUJBQU8sWUFBRSxTQUFTLFdBQUEsSUFBSyxJQUFJLEVBQUU7YUFDMUIsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUNYLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdEMsS0FBSyxDQUFDO0lBQ1I7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLENBQUM7QUFFRDtJQUFjLGNBQWE7U0FBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO1FBQWIseUJBQWE7O0lBQ3pCLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxFQUFTLElBQUksRUFBRTtBQUN4QixDQUFDIn0=