import polyfill, { imbueArray } from '../polyfills';
polyfill();
imbueArray();
import rp = require('request-promise');
import { fs } from 'mz';
import parseJspmConfigJs from './extract-jspm-config-paths';

const prefix = 'aurelia';


export default async function install(baseUrl: string, destinationDir) {

    const paths = parseJspmConfigJs(baseUrl + '/jspm.config.js', name => name.split('@').length > 1)
        .filter(item => item.indexOf(`${prefix}-`) > -1)
        .map(x => x.split(`${prefix}-`)[1]);

    paths.forEach(async x => await retrieveFromGitHub(baseUrl, destinationDir, x));


    const tsconfig: TSConfig = require(baseUrl + '/tsconfig.json');

    const {compilerOptions} = tsconfig;

    if (!compilerOptions.baseUrl) {
        compilerOptions.baseUrl = '.';
    }

    if (!compilerOptions.paths) {
        compilerOptions.paths = {};
    }

    if (!compilerOptions.moduleResolution || compilerOptions.moduleResolution === 'classic') {
        compilerOptions.moduleResolution = 'node';
    }

    paths.forEach(name => {
        tsconfig.compilerOptions.paths[`${prefix}-${name.split('@')[0]}`] = [`${destinationDir}/${prefix}-${name}`];
    });

    await fs.writeFile(baseUrl + '/tsconfig.json', JSON.stringify(tsconfig, (x, y) => y, 2));

}

async function retrieveFromGitHub(baseUrl: string, destinationDir: string, versionedName: string) {
    await ensureDest(baseUrl + destinationDir);
    const {name, version} = nameAndVesion(versionedName);

    const url = `https://raw.githubusercontent.com/${prefix}/${name}/${version}/dist/${prefix}-${name}.d.ts`;

    const destDir = `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}`;
    if (!(await fs.exists(destDir))) {
        await fs.mkdir(destDir);
    }

    const data = await rp(url, { method: 'GET' }) as string;
    await save(baseUrl, destinationDir, versionedName, data);
    return `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}/${prefix}-${name}`;
};

async function save(baseUrl, destinationDir, versionedName: string, dts: string) {
    const {name, version} = nameAndVesion(versionedName);
    const targetFile = `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}/index.d.ts`;
    const file = fs.createWriteStream(targetFile, { encoding: 'UTF8' });
    await file.write(dts);
}


async function ensureDest(path: string) {
    if (!(await fs.exists(path))) {
        await fs.mkdir(path);
    }
}

function nameAndVesion(versionedName: string) {
    const [name, version] = versionedName.split('@');
    return { name, version };
}

type TSConfig = {
    compilerOptions: {
        moduleResolution: 'classic' | 'node'
        baseUrl: string
        paths: {
            [key: string]: string[]
        }
    }
};