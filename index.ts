/// <reference path="node_modules/@types/node/index.d.ts" />

import https = require('https');
import fs = require('fs');

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
const jspmConfig = {} as { [key: string]: any };
(global.global as any).SystemJS = {
    config: config => {
        return Object.keys(config).map(key => [key, config[key]] as [string, any]).reduce((cfg, [key, value]) => {
            cfg[key] = value;
            return cfg;
        }, jspmConfig);
    }
};

function unrollWithFilter(o, predicate: (packageName: string) => boolean) {
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
