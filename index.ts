/// <reference path="node_modules/@types/node/index.d.ts" />

import https = require('https');
import fs = require('fs');
import rp = require('request-promise');
if (!fs.existsSync('./test/dest')) {
    fs.mkdirSync('./test/dest');
}
const request = async dependency => {
    const [name, version] = dependency.split('@');

    const url = `https://raw.githubusercontent.com/aurelia/${name}/${version}/dist/aurelia-${name}.d.ts`;

    const destDir = `./test/dest/aurelia-${name}@${version}`;
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir);
    }
    const response = await rp(url, { method: 'GET' });
    const targetFile = `./test/dest/aurelia-${name}@${version}/aurelia-${name}.d.ts`;
    const file = fs.createWriteStream(targetFile);
    fs.writeFileSync(targetFile, response, { encoding: 'UTF8' });
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

require('./test/jspm.config.js');
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

Promise.all(unrollWithFilter(jspmConfig, name => name.split('@').length > 1)
    .filter(item => item.indexOf('aurelia-') > -1).map(x => x.split('aurelia-')[1])
    .map(item => request(item)));



var paths = fs.readdirSync('./test/dest').reduce((pths, dir) => {
    return pths.concat(dir);
}, []);
/*tslint:disable */
const tsconfig: TSConfig = require('./test/tsconfig.json')
/*tslint:enable */
if (!tsconfig.compilerOptions.paths) { tsconfig.compilerOptions.paths = {}; }
paths.forEach(path => tsconfig.compilerOptions.paths[path.split('@')[0]] = [`dest/${path}/${path.split('@')[0]}`]);
fs.writeFileSync('./test/tsconfig.json', JSON.stringify(tsconfig, (x, y) => y, 2));
//export = request;

type TSConfig = {
    compilerOptions: {
        paths?: {
            [key: string]: string[]
        }
    }
};