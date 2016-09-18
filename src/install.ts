import polyfill, { imbueArray } from '../polyfills';
polyfill();
imbueArray();
import { ensureDir } from './ensure-dir';
import downloadDeclaration from './aquire-declaration';
import { fs } from 'mz';
import parseJspmConfig from './extract-jspm-config-paths';

export default async function install(projectDir: string, framework, outputDir) {
    const baseUrl = await fs.realpath(projectDir);
    const jspmConfigFileName = baseUrl + await fs.exists(baseUrl + '/jspm.config.js') ? '/jspm.config.js' : '/config.js';
    await ensureDir(baseUrl + '/' + outputDir);
    const paths = parseJspmConfig(jspmConfigFileName, name => name.split('@').length > 1)
        .filter(item => item.indexOf(`${framework}-`) > -1)
        .map(x => x.split(`${framework}-`)[1]);

    paths.forEach(async path => await downloadDeclaration(baseUrl, outputDir, path, framework));

    const generatedTsConfigPath = baseUrl + '/tsconfig.paths.json';
    const tsConfig: TSConfig = require(baseUrl + '/tsconfig.json');

    const generatedTsconfig = await fs.exists(generatedTsConfigPath)
        ? require(generatedTsConfigPath) as TSConfig
        : {
            compilerOptions: {
                baseUrl: '.',
                moduleResolution: 'node',
                paths: {}
            }
        };


    if (!generatedTsconfig.compilerOptions) {
        generatedTsconfig.compilerOptions = Object.assign(generatedTsconfig.compilerOptions, {
            paths: tsConfig.compilerOptions.paths || {},
            baseUrl: '.',
            moduleResolution: 'node'
        });
    }
    const {compilerOptions} = generatedTsconfig;


    paths.forEach(name => {
        compilerOptions.paths[`${framework}-${name.split('@')[0]}`] = [`${outputDir}/${framework}-${name}`];
    });

    await fs.writeFile(baseUrl + '/tsconfig.paths.json', JSON.stringify(generatedTsconfig, (x, y) => y, 2));
}

type TSConfig = {
    compilerOptions: {
        moduleResolution?: 'classic' | 'node'
        baseUrl?: string
        paths: {
            [key: string]: string[]
        }
    }
};