"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const polyfills_1 = require("../polyfills");
polyfills_1.default();
polyfills_1.imbueArray();
const requestPromise = require("request-promise");
const mz_1 = require("mz");
const extract_jspm_config_paths_1 = require("./extract-jspm-config-paths");
let prefix = 'aurelia';
function install(project, frameworkNameOrPrefix, destinationDir) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = yield mz_1.fs.realpath(project);
        prefix = frameworkNameOrPrefix;
        yield ensureDir(baseUrl + '/' + destinationDir);
        const paths = extract_jspm_config_paths_1.default(baseUrl + '/jspm.config.js', name => name.split('@').length > 1)
            .filter(item => item.indexOf(`${prefix}-`) > -1)
            .map(x => x.split(`${prefix}-`)[1]);
        paths.forEach((x) => __awaiter(this, void 0, void 0, function* () { return yield retrieveFromGitHub(baseUrl, destinationDir, x); }));
        let tsconfig;
        if (yield mz_1.fs.exists(baseUrl + '/tsconfig.paths.json')) {
            tsconfig = require(baseUrl + '/tsconfig.paths.json');
        }
        else {
            tsconfig = {
                compilerOptions: {
                    baseUrl: '.',
                    moduleResolution: 'node',
                    paths: {}
                }
            };
        }
        const { compilerOptions } = tsconfig;
        if (!compilerOptions.baseUrl) {
            compilerOptions.baseUrl = '.';
        }
        if (!compilerOptions.moduleResolution || compilerOptions.moduleResolution === 'classic') {
            compilerOptions.moduleResolution = 'node';
        }
        if (!compilerOptions.paths) {
            compilerOptions.paths = {};
        }
        paths.forEach(name => {
            tsconfig.compilerOptions.paths[`${prefix}-${name.split('@')[0]}`] = [`${destinationDir}/${prefix}-${name}`];
        });
        yield mz_1.fs.writeFile(baseUrl + '/tsconfig.paths.json', JSON.stringify(tsconfig, (x, y) => y, 2));
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = install;
function retrieveFromGitHub(baseUrl, destinationDir, versionedName) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, version } = nameAndVesion(versionedName);
        const url = `https://raw.githubusercontent.com/${prefix}/${name}/${version}/dist/${prefix}-${name}.d.ts`;
        const destDir = `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}`;
        yield ensureDir(destDir);
        const data = yield requestPromise(url, { method: 'GET' });
        yield save(baseUrl, destinationDir, versionedName, data);
        return `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}/${prefix}-${name}`;
    });
}
;
function save(baseUrl, destinationDir, versionedName, dts) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, version } = nameAndVesion(versionedName);
        const targetFile = `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}/index.d.ts`;
        const file = mz_1.fs.createWriteStream(targetFile, { encoding: 'UTF8' });
        yield file.write(dts);
    });
}
function ensureDir(path) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield mz_1.fs.exists(path))) {
            yield mz_1.fs.mkdir(path);
        }
    });
}
function nameAndVesion(versionedName) {
    const [name, version] = versionedName.split('@');
    return { name, version };
}
//# sourceMappingURL=install.js.map