import './polyfills';
declare var global: NodeJS.Global & { SystemJS: { config: (any) => void, cfg: any } };
import fs = require('fs');
global.SystemJS = function createFakeSystemJSConfigAggregator() {
    const cfg = {};
    return {
        config: config => {
            const list = walk(config);
            list.forEach(({key, value}) => cfg[key] = value);
        },
        cfg
    };
    function walk(o): { key: string, value }[] {
        return Object.entries(o).map(([key, value]) => typeof value === 'string'
            ? [{ key, value }]
            : typeof value !== 'number' && typeof value !== 'boolean' ? walk(value) : [])
            .reduce((x, y) => x.concat(y), []).map(({key, value}) => ({ key, value }));
    }
} ();
require('./test/jspm.config.js');
export default function generatePaths(cfg) {
    return Object.entries(global.SystemJS.cfg)
        .filter(([key]) => key.indexOf('aurelia') > -1)
        .map(([key, value]) => {
            const version = value.split('@')[1];
            const newValue = `jspm_packages/${value.replace(':', '/')}/${key}.d.ts`;
            return [key, newValue];
        })
        .reduce((paths, [key, value]) => {
            paths[key] = [value]; return paths;
        }, {});

}
const c = generatePaths(global.SystemJS.cfg);
console.log(c);
const tsconfig = require('./test/tsconfig.json');
tsconfig.compilerOptions.paths = Object.entries(c).reduce((paths, [key, value]) => { paths[key] = value; return paths; }, tsconfig.compilerOptions.paths || {});
console.log(tsconfig);
fs.writeFileSync('./test/tsconfig.json', JSON.stringify(tsconfig, (key, value) => value, 4));