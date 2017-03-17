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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
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
require("./polyfills/enhance");
var ensure_dir_1 = require("./ensure-dir");
var aquire_declaration_1 = require("./aquire-declaration");
var mz_1 = require("mz");
var extract_jspm_config_paths_1 = require("./extract-jspm-config-paths");
function install(_a) {
    var projectDir = _a.projectDir, framework = _a.framework, dest = _a.dest, explicitIndex = _a.explicitIndex;
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var baseUrl, jspmConfigFileName, _a, _b, _c, paths, _d, _e, generatedTsConfigPath, tsConfig, _f, _g, generatedTsConfig, compilerOptions;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0: return [4 /*yield*/, mz_1.fs.realpath(projectDir)];
                case 1:
                    baseUrl = _h.sent();
                    _b = (_a = mz_1.fs).exists;
                    return [4 /*yield*/, mz_1.fs.realpath(baseUrl + '/jspm.config.js')];
                case 2: return [4 /*yield*/, _b.apply(_a, [_h.sent()])];
                case 3:
                    if (_h.sent()) {
                        jspmConfigFileName = baseUrl + '/jspm.config.js';
                    }
                    else {
                        jspmConfigFileName = baseUrl + '/config.js';
                    }
                    _d = extract_jspm_config_paths_1.default;
                    return [4 /*yield*/, mz_1.fs.realpath(jspmConfigFileName)];
                case 4:
                    paths = _d.apply(void 0, [_h.sent(), function (name) { return name.split('@').length > 1 && !name.match(/aurelia-types-installer/); }])
                        .filter(function (item) { return item.indexOf(framework + "-") > -1; })
                        .map(function (x) { return x.split(framework + "-")[1]; });
                    return [4 /*yield*/, ensure_dir_1.default(baseUrl + '/' + dest)];
                case 5:
                    _h.sent();
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
                    _h.sent();
                    generatedTsConfigPath = baseUrl + '/tsconfig.paths.json';
                    _f = require;
                    return [4 /*yield*/, mz_1.fs.realpath(baseUrl + '/tsconfig.json')];
                case 7:
                    tsConfig = _f.apply(void 0, [_h.sent()]);
                    return [4 /*yield*/, mz_1.fs.exists(generatedTsConfigPath)];
                case 8:
                    if (_h.sent()) {
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
                    return [4 /*yield*/, mz_1.fs.writeFile(baseUrl + '/tsconfig.paths.json', JSON.stringify(generatedTsConfig, function (_, value) { return value; }, 2))];
                case 9:
                    _h.sent();
                    return [2 /*return*/];
            }
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = install;
//# sourceMappingURL=install.js.map