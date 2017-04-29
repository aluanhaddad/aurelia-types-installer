import './polyfills/enhance';
import ensureDir from './ensure-dir';
import downloadDeclaration from './aquire-declaration';
import {fs} from 'mz';
import extractJspmConfig from './extract-jspm-config';

export interface InstallOptions {
  projectDir: string;
  framework: string;
  dest: string;
  explicitIndex: boolean;
}

export default async function install({ projectDir, framework, dest, explicitIndex }: InstallOptions) {
  const baseUrl = await fs.realpath(projectDir);

  let jspmConfigFileName: string;
  if (await fs.exists(await fs.realpath(baseUrl + '/jspm.config.js'))) {
    jspmConfigFileName = baseUrl + '/jspm.config.js';
  } else {
    jspmConfigFileName = baseUrl + '/config.js';
  }
  const paths = extractJspmConfig(await fs.realpath(jspmConfigFileName), name => name.split('@').length > 1 && !name.match(/aurelia-types-installer/))
    .filter(item => item.indexOf(`${framework}-`) > -1)
    .map(x => x.split(`${framework}-`)[1]);

  await ensureDir(baseUrl + '/' + dest);
  await Promise.all(paths.map(async path => {
    await downloadDeclaration(baseUrl, dest, path, framework);
  }));

  let generatedTsConfigPath = baseUrl + '/tsconfig.paths.json';
  const tsConfig: TSConfig = require(await fs.realpath(baseUrl + '/tsconfig.json'));
  let generatedTsConfig: TSConfig;
  if (await fs.exists(generatedTsConfigPath)) {
    generatedTsConfig = require(generatedTsConfigPath) as TSConfig;
  } else {
    generatedTsConfig = {
      compilerOptions: {
        baseUrl: '.',
        paths: {}
      }
    };
  }
  if (!generatedTsConfig.compilerOptions) {
    generatedTsConfig.compilerOptions = Object.assign(generatedTsConfig.compilerOptions, {
      paths: tsConfig.compilerOptions.paths || {},
      baseUrl: '.',
    });
  }
  const {compilerOptions} = generatedTsConfig;

  paths.forEach(name => {
    compilerOptions.paths[`${framework}-${name.split('@')[0]}`] = [`${dest}/${framework}-${name}${explicitIndex ? '/index' : ''}`];
  });
  if (!explicitIndex && !tsConfig.compilerOptions.moduleResolution && !generatedTsConfig.compilerOptions.moduleResolution) {
    generatedTsConfig.compilerOptions.moduleResolution = 'node';
  }
  await fs.writeFile(baseUrl + '/tsconfig.paths.json', JSON.stringify(generatedTsConfig, (_, value) => value, 2));
}

type TSConfig = {
  compilerOptions: {
    moduleResolution?: 'node' | 'classic'
    baseUrl?: string
    paths: {
      [key: string]: string[]
    }
  }
};