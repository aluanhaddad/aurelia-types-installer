import './polyfills/enhance';
import ensureDir from './ensure-dir';
import downloadDeclaration from './aquire-declaration';
import {fs} from 'mz';
import path = require('path');
import extractJspmConfig from './extract-jspm-config';

export interface InstallOptions {
  projectDir: string;
  framework: string;
  dest: string;
  explicitIndex: boolean;
}

export default async function install({projectDir, framework, dest, explicitIndex}: InstallOptions) {
  const baseUrl = await fs.realpath(projectDir);

  let jspmConfigFileName: string;
  if (await fs.exists(await fs.realpath(baseUrl + '/jspm.config.js'))) {
    jspmConfigFileName = baseUrl + path.sep + 'jspm.config.js';
  } else {
    jspmConfigFileName = baseUrl + path.sep + 'config.js';
  }
  const paths = extractJspmConfig(await fs.realpath(jspmConfigFileName), name => name.split('@').length > 1 && !name.match(/aurelia-types-installer/))
    .filter(item => item.indexOf(`${framework}-`) > -1)
    .map(x => x.split(`${framework}-`)[1]);

  const {successes, failures} = (await Promise.all(paths.map(async path => {
    try {
      await ensureDir(baseUrl + '/' + dest);
      try {
        const result = await downloadDeclaration(baseUrl, dest, path, framework);
        return {message: result, error: undefined};
      } catch (e) {
        return {message: `failed to install types for '${framework}-${path}:' could not locate repository.`, error: e.message};
      }
    } catch (x) {
      return {message: `failed to install types for '${framework}-${path}: destination directory, '${dest}', could not be read.'`, error: x.message};
    }
  }))).reduce(({successes, failures}, result) => {
    if (result.error) {
      return {
        successes,
        failures: [...failures, result]
      };
    }
    return {
      successes: [...successes, result.message],
      failures
    };
  }, {
      successes: [] as string[], failures: [] as {message: string, error: string}[]
    });

  let generatedTsConfigPath = baseUrl + path.sep + 'tsconfig.paths.json';
  const tsConfig: TSConfig = require(await fs.realpath(baseUrl + path.sep + 'tsconfig.json'));
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
  await fs.writeFile(baseUrl + path.sep + 'tsconfig.paths.json', JSON.stringify(generatedTsConfig, (_, value) => value, 2));
  return {
    summary: buildSummary(),
    successes,
    failures
  };

  function buildSummary() {
    const overview = `installed ${successes.length} ${framework} typings\n\nsummary\ninstalled typings for ${successes.length} aurelia-packages:\n\n${successes.map(success => ' - ' + success).join(`\n`)}`;
    const errors = failures.length
      ? `\nunable to locate typings for ${failures.length} ${framework} packages:\n\n${failures.map(({message}) => ` - ${message}`).join(`\n`)}`
      : '';
    return overview + '\n' + errors;
  }
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