"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfills/enhance");
var ensure_dir_1 = require("./ensure-dir");
var aquire_declaration_1 = require("./aquire-declaration");
var mz_1 = require("mz");
var path = require("path");
var extract_jspm_config_1 = require("./extract-jspm-config");
function install(_a) {
    var projectDir = _a.projectDir, framework = _a.framework, dest = _a.dest, explicitIndex = _a.explicitIndex;
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var baseUrl, jspmConfigFileName, _a, _b, paths, _c, generatedTsConfigPath, tsConfig, _d, generatedTsConfig, compilerOptions;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, mz_1.fs.realpath(projectDir)];
                case 1:
                    baseUrl = _e.sent();
                    _b = (_a = mz_1.fs).exists;
                    return [4 /*yield*/, mz_1.fs.realpath(baseUrl + '/jspm.config.js')];
                case 2: return [4 /*yield*/, _b.apply(_a, [_e.sent()])];
                case 3:
                    if (_e.sent()) {
                        jspmConfigFileName = baseUrl + path.sep + 'jspm.config.js';
                    }
                    else {
                        jspmConfigFileName = baseUrl + path.sep + 'config.js';
                    }
                    _c = extract_jspm_config_1.default;
                    return [4 /*yield*/, mz_1.fs.realpath(jspmConfigFileName)];
                case 4:
                    paths = _c.apply(void 0, [_e.sent(), function (name) { return name.split('@').length > 1 && !name.match(/aurelia-types-installer/); }])
                        .filter(function (item) { return item.indexOf(framework + "-") > -1; })
                        .map(function (x) { return x.split(framework + "-")[1]; });
                    return [4 /*yield*/, ensure_dir_1.default(baseUrl + '/' + dest)];
                case 5:
                    _e.sent();
                    return [4 /*yield*/, Promise.all(paths.map(function (path) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, aquire_declaration_1.default(baseUrl, dest, path, framework)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 6:
                    _e.sent();
                    generatedTsConfigPath = baseUrl + path.sep + 'tsconfig.paths.json';
                    _d = require;
                    return [4 /*yield*/, mz_1.fs.realpath(baseUrl + path.sep + 'tsconfig.json')];
                case 7:
                    tsConfig = _d.apply(void 0, [_e.sent()]);
                    return [4 /*yield*/, mz_1.fs.exists(generatedTsConfigPath)];
                case 8:
                    if (_e.sent()) {
                        generatedTsConfig = require(generatedTsConfigPath);
                    }
                    else {
                        generatedTsConfig = {
                            compilerOptions: {
                                baseUrl: '.',
                                paths: {}
                            }
                        };
                    }
                    if (!generatedTsConfig.compilerOptions) {
                        generatedTsConfig.compilerOptions = Object.assign(generatedTsConfig.compilerOptions, {
                            paths: tsConfig.compilerOptions.paths || {},
                            baseUrl: '.',
                        });
                    }
                    compilerOptions = generatedTsConfig.compilerOptions;
                    paths.forEach(function (name) {
                        compilerOptions.paths[framework + "-" + name.split('@')[0]] = [dest + "/" + framework + "-" + name + (explicitIndex ? '/index' : '')];
                    });
                    if (!explicitIndex && !tsConfig.compilerOptions.moduleResolution && !generatedTsConfig.compilerOptions.moduleResolution) {
                        generatedTsConfig.compilerOptions.moduleResolution = 'node';
                    }
                    return [4 /*yield*/, mz_1.fs.writeFile(baseUrl + path.sep + 'tsconfig.paths.json', JSON.stringify(generatedTsConfig, function (_, value) { return value; }, 2))];
                case 9:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = install;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnN0YWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNkI7QUFDN0IsMkNBQXFDO0FBQ3JDLDJEQUF1RDtBQUN2RCx5QkFBc0I7QUFDdEIsMkJBQThCO0FBQzlCLDZEQUFzRDtBQVN0RCxpQkFBc0MsRUFBNEQ7UUFBM0QsMEJBQVUsRUFBRSx3QkFBUyxFQUFFLGNBQUksRUFBRSxnQ0FBYTs7O3FCQUczRSxrQkFBa0IscUJBZWxCLHFCQUFxQixnQkFFckIsaUJBQWlCLEVBaUJkLGVBQWU7Ozt3QkFwQ04scUJBQU0sT0FBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBQTs7OEJBQTdCLFNBQTZCO29CQUduQyxLQUFBLENBQUEsS0FBQSxPQUFFLENBQUEsQ0FBQyxNQUFNLENBQUE7b0JBQUMscUJBQU0sT0FBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsRUFBQTt3QkFBOUQscUJBQU0sY0FBVSxTQUE4QyxFQUFDLEVBQUE7O29CQUFuRSxFQUFFLENBQUMsQ0FBQyxTQUErRCxDQUFDLENBQUMsQ0FBQzt3QkFDcEUsa0JBQWtCLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUM7b0JBQzdELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sa0JBQWtCLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDO29CQUN4RCxDQUFDO29CQUNhLEtBQUEsNkJBQWlCLENBQUE7b0JBQUMscUJBQU0sT0FBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFBOzs0QkFBdkQsa0JBQWtCLFNBQXFDLEVBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFD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