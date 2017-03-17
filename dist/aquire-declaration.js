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
var mz_1 = require("mz");
var ensure_dir_1 = require("./ensure-dir");
var requestPromise = require("request-promise");
function retrieveFromGitHub(baseUrl, destinationDir, versionedName, prefix) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, version, url, destDir, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = nameAndVesion(versionedName), name = _a.name, version = _a.version;
                    url = "https://raw.githubusercontent.com/" + prefix + "/" + name + "/" + version + "/dist/" + prefix + "-" + name + ".d.ts";
                    destDir = baseUrl + "/" + destinationDir + "/" + prefix + "-" + name + "@" + version;
                    return [4 /*yield*/, ensure_dir_1.default(destDir)];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, requestPromise(url, { method: 'GET' })];
                case 2:
                    data = _b.sent();
                    return [4 /*yield*/, save(baseUrl, destinationDir, versionedName, data, prefix)];
                case 3:
                    _b.sent();
                    return [2 /*return*/, baseUrl + "/" + destinationDir + "/" + prefix + "-" + name + "@" + version + "/" + prefix + "-" + name];
            }
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = retrieveFromGitHub;
;
function save(baseUrl, destinationDir, versionedName, dts, prefix) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, version, targetFile, file;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = nameAndVesion(versionedName), name = _a.name, version = _a.version;
                    targetFile = baseUrl + "/" + destinationDir + "/" + prefix + "-" + name + "@" + version + "/index.d.ts";
                    file = mz_1.fs.createWriteStream(targetFile, { encoding: 'UTF8' });
                    return [4 /*yield*/, file.write(dts)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function nameAndVesion(versionedName) {
    var _a = versionedName.split('@'), name = _a[0], version = _a[1];
    return { name: name, version: version };
}
//# sourceMappingURL=aquire-declaration.js.map