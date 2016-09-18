"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const mz_1 = require("mz");
const ensure_dir_1 = require("./ensure-dir");
const requestPromise = require("request-promise");
let prefix;
function retrieveFromGitHub(baseUrl, destinationDir, versionedName, frameworkNameOrPrefix) {
    return __awaiter(this, void 0, void 0, function* () {
        prefix = frameworkNameOrPrefix;
        const { name, version } = nameAndVesion(versionedName);
        const url = `https://raw.githubusercontent.com/${prefix}/${name}/${version}/dist/${prefix}-${name}.d.ts`;
        const destDir = `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}`;
        yield ensure_dir_1.ensureDir(destDir);
        const data = yield requestPromise(url, { method: 'GET' });
        yield save(baseUrl, destinationDir, versionedName, data);
        return `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}/${prefix}-${name}`;
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = retrieveFromGitHub;
;
function save(baseUrl, destinationDir, versionedName, dts) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, version } = nameAndVesion(versionedName);
        const targetFile = `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}/index.d.ts`;
        const file = mz_1.fs.createWriteStream(targetFile, { encoding: 'UTF8' });
        yield file.write(dts);
    });
}
function nameAndVesion(versionedName) {
    const [name, version] = versionedName.split('@');
    return { name, version };
}
//# sourceMappingURL=aquire-declaration.js.map