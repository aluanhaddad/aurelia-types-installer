import polyfill, { imbueArray } from './polyfills';
polyfill();
imbueArray();
import { ensureDir } from './ensure-dir';
import downloadDeclaration from './aquire-declaration';
import { fs } from 'mz';

import parseJspmConfig from './extract-jspm-config-paths';

export default async function install(projectDir: string, framework: string, outputDir: string) {
  const baseUrl = await fs.realpath(projectDir);
  let jspmConfigFileName: string;

  if (await fs.exists(await fs.realpath(baseUrl + '/jspm.config.js'))) {
    jspmConfigFileName = baseUrl + '/jspm.config.js';
  } else {
    jspmConfigFileName = baseUrl + '/config.js';
  }
  const paths = parseJspmConfig(await fs.realpath(jspmConfigFileName), name => name.split('@').length > 1)
    .filter(item => item.indexOf(`${framework}-`) > -1)
    .map(x => x.split(`${framework}-`)[1]);

  await ensureDir(baseUrl + '/' + outputDir);
  paths.forEach(async path => await downloadDeclaration(baseUrl, outputDir, path, framework));

  let generatedTsConfigPath = baseUrl + '/tsconfig.paths.json';
  const tsConfig: TSConfig = require(await fs.realpath(baseUrl + '/tsconfig.json'));
  let generatedTsConfig: TSConfig;
  if (await fs.exists(generatedTsConfigPath)) {
    generatedTsConfig = require(generatedTsConfigPath) as TSConfig;
  } else {
    generatedTsConfig = {
      compilerOptions: {
        baseUrl: '.',
        moduleResolution: 'node',
        paths: {}
      }
    };
  }
  if (!generatedTsConfig.compilerOptions) {
    generatedTsConfig.compilerOptions = Object.assign(generatedTsConfig.compilerOptions, {
      paths: tsConfig.compilerOptions.paths || {},
      baseUrl: '.',
      moduleResolution: 'node' as 'node'
    });
  }
  const {compilerOptions} = generatedTsConfig;


  paths.forEach(name => {
    compilerOptions.paths[`${framework}-${name.split('@')[0]}`] = [`${outputDir}/${framework}-${name}`];
  });

  await fs.writeFile(baseUrl + '/tsconfig.paths.json', JSON.stringify(generatedTsConfig, (x, y) => y, 2));
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