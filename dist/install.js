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
        function buildSummary() {
            var overview = "installed " + successes.length + " " + framework + " typings\n\nsummary\ninstalled typings for " + successes.length + " aurelia-packages:\n\n" + successes.map(function (success) { return ' - ' + success; }).join("\n");
            var errors = failures.length
                ? "\nunable to locate typings for " + failures.length + " " + framework + " packages:\n\n" + failures.map(function (_a) {
                    var message = _a.message;
                    return " - " + message;
                }).join("\n")
                : '';
            return overview + '\n' + errors;
        }
        var baseUrl, jspmConfigFileName, _a, _b, paths, _c, _d, successes, failures, generatedTsConfigPath, tsConfig, _e, generatedTsConfig, compilerOptions;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, mz_1.fs.realpath(projectDir)];
                case 1:
                    baseUrl = _f.sent();
                    _b = (_a = mz_1.fs).exists;
                    return [4 /*yield*/, mz_1.fs.realpath(baseUrl + '/jspm.config.js')];
                case 2: return [4 /*yield*/, _b.apply(_a, [_f.sent()])];
                case 3:
                    if (_f.sent()) {
                        jspmConfigFileName = baseUrl + path.sep + 'jspm.config.js';
                    }
                    else {
                        jspmConfigFileName = baseUrl + path.sep + 'config.js';
                    }
                    _c = extract_jspm_config_1.default;
                    return [4 /*yield*/, mz_1.fs.realpath(jspmConfigFileName)];
                case 4:
                    paths = _c.apply(void 0, [_f.sent(), function (name) { return name.split('@').length > 1 && !name.match(/aurelia-types-installer/); }])
                        .filter(function (item) { return item.indexOf(framework + "-") > -1; })
                        .map(function (x) { return x.split(framework + "-")[1]; });
                    return [4 /*yield*/, Promise.all(paths.map(function (path) { return __awaiter(_this, void 0, void 0, function () {
                            var result, e_1, x_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 6, , 7]);
                                        return [4 /*yield*/, ensure_dir_1.default(baseUrl + '/' + dest)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 4, , 5]);
                                        return [4 /*yield*/, aquire_declaration_1.default(baseUrl, dest, path, framework)];
                                    case 3:
                                        result = _a.sent();
                                        return [2 /*return*/, { message: result, error: undefined }];
                                    case 4:
                                        e_1 = _a.sent();
                                        return [2 /*return*/, { message: "failed to install types for '" + framework + "-" + path + ":' could not locate repository.", error: e_1.message }];
                                    case 5: return [3 /*break*/, 7];
                                    case 6:
                                        x_1 = _a.sent();
                                        return [2 /*return*/, { message: "failed to install types for '" + framework + "-" + path + ": destination directory, '" + dest + "', could not be read.'", error: x_1.message }];
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 5:
                    _d = (_f.sent()).reduce(function (_a, result) {
                        var successes = _a.successes, failures = _a.failures;
                        if (result.error) {
                            return {
                                successes: successes,
                                failures: failures.concat([result])
                            };
                        }
                        return {
                            successes: successes.concat([result.message]),
                            failures: failures
                        };
                    }, {
                        successes: [], failures: []
                    }), successes = _d.successes, failures = _d.failures;
                    generatedTsConfigPath = baseUrl + path.sep + 'tsconfig.paths.json';
                    _e = require;
                    return [4 /*yield*/, mz_1.fs.realpath(baseUrl + path.sep + 'tsconfig.json')];
                case 6:
                    tsConfig = _e.apply(void 0, [_f.sent()]);
                    return [4 /*yield*/, mz_1.fs.exists(generatedTsConfigPath)];
                case 7:
                    if (_f.sent()) {
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
                case 8:
                    _f.sent();
                    return [2 /*return*/, {
                            summary: buildSummary(),
                            successes: successes,
                            failures: failures
                        }];
            }
        });
    });
}
exports.default = install;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnN0YWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNkI7QUFDN0IsMkNBQXFDO0FBQ3JDLDJEQUF1RDtBQUN2RCx5QkFBc0I7QUFDdEIsMkJBQThCO0FBQzlCLDZEQUFzRDtBQVN0RCxpQkFBc0MsRUFBNEQ7UUFBM0QsMEJBQVUsRUFBRSx3QkFBUyxFQUFFLGNBQUksRUFBRSxnQ0FBYTs7O1FBMEUvRTtZQUNFLElBQU0sUUFBUSxHQUFHLGVBQWEsU0FBUyxDQUFDLE1BQU0sU0FBSSxTQUFTLG1EQUE4QyxTQUFTLENBQUMsTUFBTSw4QkFBeUIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUssR0FBRyxPQUFPLEVBQWYsQ0FBZSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRyxDQUFDO1lBQ3pNLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNO2tCQUMxQixvQ0FBa0MsUUFBUSxDQUFDLE1BQU0sU0FBSSxTQUFTLHNCQUFpQixRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUzt3QkFBUixvQkFBTztvQkFBTSxPQUFBLFFBQU0sT0FBUztnQkFBZixDQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHO2tCQUN4SSxFQUFFLENBQUM7WUFDUCxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbEMsQ0FBQzs7Ozt3QkEvRWUscUJBQU0sT0FBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBQTs7b0JBQXZDLE9BQU8sR0FBRyxTQUE2QjtvQkFHbkMsS0FBQSxDQUFBLEtBQUEsT0FBRSxDQUFBLENBQUMsTUFBTSxDQUFBO29CQUFDLHFCQUFNLE9BQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLGlCQUFpQixD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