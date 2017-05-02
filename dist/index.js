"use strict";
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
var _a = parse_args_1.default(), command = _a.command, args = __rest(_a, ["command"]);
switch (command) {
    case 'version':
        info(package_json_1.version);
        break;
    case 'install':
    case 'i':
        install_1.default(args)
            .then(info.bind('Complete'))
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
    console.info("aurelia-types-installer " + package_json_1.version);
    console.info(args);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0M7QUFDaEMsMkNBQXFDO0FBQ3JDLGdEQUF3QztBQUV4QyxJQUFNLElBQUksR0FBRyxnSUFBZ0ksQ0FBQztBQUU5SSxJQUFNLDJCQUFnQyxFQUEvQixvQkFBTyxFQUFFLDhCQUFzQixDQUFDO0FBRXZDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDaEIsS0FBSyxTQUFTO1FBQUUsSUFBSSxDQUFDLHNCQUFPLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUM7SUFDUixLQUFLLFNBQVMsQ0FBQztJQUNmLEtBQUssR0FBRztRQUNOLGlCQUFPLENBQUMsSUFBSSxDQUFDO2FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdEMsS0FBSyxDQUFDO0lBQ1I7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLENBQUM7QUFFRDtJQUFjLGNBQWE7U0FBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO1FBQWIseUJBQWE7O0lBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTJCLHNCQUFTLENBQUMsQ0FBQztJQUNuRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JCLENBQUMifQ==