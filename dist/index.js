"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var usage = 'Usage: ati install [--projectDir = .] [--framework = aurelia] [--dest = projectDir/jspm_packages/npm] [--explicitIndex = true]';
var _a = parse_args_1.default(), command = _a.command, framework = _a.framework, version = _a.version, help = _a.help, args = __rest(_a, ["command", "framework", "version", "help"]);
(function () {
    return __awaiter(this, void 0, void 0, function () {
        function info() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.info.apply(console, args);
        }
        var _a, results, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = command;
                    switch (_a) {
                        case 'install': return [3 /*break*/, 1];
                        case 'i': return [3 /*break*/, 1];
                    }
                    return [3 /*break*/, 6];
                case 1:
                    info("Installing " + framework + " type declarations...");
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, install_1.default(__assign({ framework: framework }, args))];
                case 3:
                    results = _b.sent();
                    info('\n');
                    info(results.summary);
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _b.sent();
                    console.error.bind(e_1);
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 7];
                case 6:
                    if (version) {
                        info(package_json_1.version);
                        process.exit(0);
                    }
                    else if (help) {
                        info(usage);
                        process.exit(0);
                    }
                    else {
                        info(usage);
                    }
                    _b.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWdDO0FBQ2hDLDJDQUFxQztBQUNyQyxnREFBc0Q7QUFFdEQsSUFBTSxLQUFLLEdBQUcsZ0lBQWdJLENBQUM7QUFFL0ksSUFBTSwyQkFBMEQsRUFBekQsb0JBQU8sRUFBRSx3QkFBUyxFQUFFLG9CQUFPLEVBQUUsY0FBSSxFQUFFLDhEQUFzQixDQUFDO0FBRWpFLENBQUM7O1FBeUJDO1lBQWMsY0FBYTtpQkFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO2dCQUFiLHlCQUFhOztZQUN6QixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sRUFBUyxJQUFJLEVBQUU7UUFDeEIsQ0FBQzs7Ozs7b0JBMUJPLEtBQUEsT0FBTyxDQUFBOzs2QkFDUixTQUFTLEVBQVQsTUFBTSxrQkFBRzs2QkFDVCxHQUFHLEVBQUgsTUFDVCxrQkFEWTs7OztvQkFDTixJQUFJLENBQUMsZ0JBQWMsU0FBUywwQkFBdUIsQ0FBQyxDQUFDOzs7O29CQUVuQyxxQkFBTSxpQkFBTyxZQUFFLFNBQVMsV0FBQSxJQUFLLElBQUksRUFBRSxFQUFBOztvQkFBN0MsT0FBTyxHQUFHLFNBQW1DO29CQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7OztvQkFFdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUM7O3dCQUV4Qix3QkFBTTs7b0JBRU4sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDWixJQUFJLENBQUMsc0JBQVUsQ0FBQyxDQUFDO3dCQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2QsQ0FBQzs7Ozs7O0NBTU4sRUFBRSxDQUFDLENBQUMifQ==