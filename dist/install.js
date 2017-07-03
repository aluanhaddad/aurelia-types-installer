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
            var overview = "Installed " + successes.length + " " + framework + " type declarations.\n\n" + successes.map(function (success) { return ' - ' + success; }).join("\n") + ".";
            var errors = failures.length
                ? "\nUnable to locate type declarations for " + failures.length + " " + framework + " packages:\n\n" + failures.map(function (_a) {
                    var message = _a.message;
                    return " - " + message;
                }).join("\n") + "."
                : '';
            return [overview, errors].join('\n');
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
                                        return [2 /*return*/, { message: "failed to install declarations for '" + framework + "-" + path + ":' could not locate declaration in repository or repository.", error: e_1.message }];
                                    case 5: return [3 /*break*/, 7];
                                    case 6:
                                        x_1 = _a.sent();
                                        return [2 /*return*/, { message: "failed to install declarations for '" + framework + "-" + path + ": destination directory, '" + dest + "', could not be read.'", error: x_1.message }];
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
                        var existingEntries = compilerOptions.paths[framework + "-" + name.split('@')[0]];
                        var newEntry = dest + "/" + framework + "-" + name + (explicitIndex ? '/index' : '');
                        compilerOptions.paths[framework + "-" + name.split('@')[0]] = existingEntries ? existingEntries.filter(function (entry) { return entry !== newEntry; }).concat([newEntry]) : [newEntry];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnN0YWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNkI7QUFDN0IsMkNBQXFDO0FBQ3JDLDJEQUF1RDtBQUN2RCx5QkFBc0I7QUFDdEIsMkJBQThCO0FBQzlCLDZEQUFzRDtBQVN0RCxpQkFBc0MsRUFBNEQ7UUFBM0QsMEJBQVUsRUFBRSx3QkFBUyxFQUFFLGNBQUksRUFBRSxnQ0FBYTs7O1FBNEUvRTtZQUNFLElBQU0sUUFBUSxHQUFHLGVBQWEsU0FBUyxDQUFDLE1BQU0sU0FBSSxTQUFTLCtCQUEwQixTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSyxHQUFHLE9BQU8sRUFBZixDQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQUcsQ0FBQztZQUM3SSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtrQkFDMUIsOENBQTRDLFFBQVEsQ0FBQyxNQUFNLFNBQUksU0FBUyxzQkFBaUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7d0JBQVIsb0JBQU87b0JBQU0sT0FBQSxRQUFNLE9BQVM7Z0JBQWYsQ0FBZSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFHO2tCQUNuSixFQUFFLENBQUM7WUFDUCxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7Ozs7d0JBakZlLHFCQUFNLE9BQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUE7O29CQUF2QyxPQUFPLEdBQUcsU0FBNkI7b0JBR25DLEtBQUEsQ0FBQSxLQUFBLE9BQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQTtvQkFBQyxxQkFBTSxPQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8s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