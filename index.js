/// <reference path="node_modules/@types/node/index.d.ts" />
"use strict";
const https = require('https');
const fs = require('fs');
const request = (dependency) => {
    var [name, version] = dependency.split('@');
    const url = `https://raw.githubusercontent.com/aurelia/${name}/${version}/dist/aurelia-${name}.d.ts`;
    const destDir = `./test/dest/aurelia-${name}@${version}`;
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir);
    }
    const file = fs.createWriteStream(`./test/dest/aurelia-${name}@${version}/index.d.ts`);
    return https.request({ method: 'GET', path: url }, (response) => {
        response.pipe(file);
    });
};
const jspmConfig = {};
global.global.SystemJS = {
    config: config => {
        return Object.keys(config).map(key => [key, config[key]]).reduce((cfg, [key, value]) => {
            cfg[key] = value;
            return cfg;
        }, jspmConfig);
    }
};
function unrollWithFilter(o, predicate) {
    if (!o || typeof o === 'number' || typeof o === 'boolaean') {
        return [];
    }
    return Object
        .keys(o)
        .map(key => o[key])
        .map(value => typeof value !== 'string'
        ? unrollWithFilter(value, predicate)
        : [value])
        .reduce((values, value) => values.concat(value), [])
        .filter(value => typeof value === 'string' && predicate(value));
}
unrollWithFilter(jspmConfig, name => name.split('@').length > 1)
    .filter(item => item.indexOf('aurelia-') > -1).map(x => x.split('aurelia-')[1])
    .forEach(item => request(item));
/*var paths = fs.readdirSync('./test/dest').reduce((pths, dir) => {
    pths.push(dir);
    return pths;
}, []);
const tsconfig = require('./test/tsconfig.json');
if (!tsconfig.paths) { tsconfig.paths = {}; }
paths.forEach(path => tsconfig.paths[path.split('@')[0]] = [path + '/index.d.ts']);
fs.writeFileSync('./test.tsconfig.json', JSON.stringify(tsconfig));
*/
//export = request;
//# sourceMappingURL=index.js.map