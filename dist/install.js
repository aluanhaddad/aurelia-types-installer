"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const polyfills_1 = require("./polyfills");
polyfills_1.default();
polyfills_1.imbueArray();
const ensure_dir_1 = require("./ensure-dir");
const aquire_declaration_1 = require("./aquire-declaration");
const mz_1 = require("mz");
const extract_jspm_config_paths_1 = require("./extract-jspm-config-paths");
function install(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { projectDir, framework, dest, explicitIndex } = options;
        const baseUrl = yield mz_1.fs.realpath(projectDir);
        let jspmConfigFileName;
        if (yield mz_1.fs.exists(yield mz_1.fs.realpath(baseUrl + '/jspm.config.js'))) {
            jspmConfigFileName = baseUrl + '/jspm.config.js';
        }
        else {
            jspmConfigFileName = baseUrl + '/config.js';
        }
        const paths = extract_jspm_config_paths_1.default(yield mz_1.fs.realpath(jspmConfigFileName), name => name.split('@').length > 1)
            .filter(item => item.indexOf(`${framework}-`) > -1)
            .map(x => x.split(`${framework}-`)[1]);
        yield ensure_dir_1.ensureDir(baseUrl + '/' + dest);
        paths.forEach((path) => __awaiter(this, void 0, void 0, function* () { return yield aquire_declaration_1.default(baseUrl, dest, path, framework); }));
        let generatedTsConfigPath = baseUrl + '/tsconfig.paths.json';
        const tsConfig = require(yield mz_1.fs.realpath(baseUrl + '/tsconfig.json'));
        let generatedTsConfig;
        if (yield mz_1.fs.exists(generatedTsConfigPath)) {
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
        const { compilerOptions } = generatedTsConfig;
        paths.forEach(name => {
            compilerOptions.paths[`${framework}-${name.split('@')[0]}`] = [`${dest}/${framework}-${name}${explicitIndex ? '/index' : ''}`];
        });
        if (!explicitIndex && !tsConfig.compilerOptions.moduleResolution && !generatedTsConfig.compilerOptions.moduleResolution) {
            generatedTsConfig.compilerOptions.moduleResolution = 'node';
        }
        yield mz_1.fs.writeFile(baseUrl + '/tsconfig.paths.json', JSON.stringify(generatedTsConfig, (x, y) => y, 2));
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = install;
//# sourceMappingURL=install.js.map