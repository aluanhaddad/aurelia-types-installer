import './polyfills/enhance';
import mz = require('mz');
const {fs} = mz;
import path = require('path');
import deepEqual = require('deep-equal');
import ensureDir from './ensure-dir';
import downloadDeclaration from './aquire-declaration';
import loadJspmConfiguration from './load-jspm-configuration';

export interface InstallOptions {
  projectDir: string;
  framework: string;
  dest: string;
  explicitIndex: boolean;
}

export default async function install({projectDir, framework, dest, explicitIndex}: InstallOptions) {
  const baseUrl = await fs.realpath(projectDir);
  let successSummary = '';
  let failureSummary = '';
  for await (const paths of loadJspmConfiguration({baseUrl, framework})) {

    const {successes, failures} = (await Promise.all(paths.map(async path => {
      try {
        await ensureDir(baseUrl + '/' + dest);
        try {
          const result = await downloadDeclaration(baseUrl, dest, path, framework);
          return {message: result, error: undefined};
        } catch (e) {
          return {
            message: `failed to install declarations for '${framework}-${path}' (could not locate declaration in repository or repository)
        ${failureWorkaroundHint(path)}`, error: e.message
          };
        }
      } catch (x) {
        return {message: `failed to install declarations for '${framework}-${path} (destination directory, '${dest}', could not be read)'`, error: x.message};
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

    const generatedTsConfigPath = baseUrl + path.sep + 'tsconfig.paths.json';
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
      const existingEntries = compilerOptions.paths[`${framework}-${name.split('@')[0]}`];
      const newEntry = `${dest}/${framework}-${name}${explicitIndex ? '/index' : ''}`;
      compilerOptions.paths[`${framework}-${name.split('@')[0]}`] = existingEntries ? [...existingEntries.filter(entry => entry !== newEntry), newEntry] : [newEntry];
    });
    if (!explicitIndex && !tsConfig.compilerOptions.moduleResolution && !generatedTsConfig.compilerOptions.moduleResolution) {
      generatedTsConfig.compilerOptions.moduleResolution = 'node';
    }

    if (!deepEqual(generatedTsConfig, tsConfig, {strict: true})) {
      await fs.writeFile(baseUrl + path.sep + 'tsconfig.paths.json', JSON.stringify(generatedTsConfig, (_, value) => value, 2));
    }
    appendSummary(successes, failures);
  }
  return {successSummary, failureSummary};
  function appendSummary(successes: string[], failures: {message: string}[]) {

    successSummary = successSummary + '\n' + `Installed ${successes.length} ${framework} type declarations:

${successes.map(success => ' - ' + success).join('\n')}.`,

      failureSummary = failureSummary + '\n' + failures.length && `
Unable to locate type declarations for ${failures.length} ${framework} packages:

${failures.map(({message}) => ` - ${message}`).join('\n')}
` || '';

  }

  function failureWorkaroundHint(dep: string) {
    const name = `${framework}-${dep.split('@')[0] || dep}`;
    return `
consider:
  - adding
      "${name}": ["jspm_packages/npm/${name}"]
    to the "paths" object of the "compilerOptions" object of your tsconfig.paths.json
  - running
      $ jspm install npm:@types/${name}
  - running
      $ npm install --save @types/${name}
  - adding
      declare module "${name}";
    to a global .d.ts file
  `;
  }
}

interface TSConfig {
  compilerOptions: {
    moduleResolution?: 'node' | 'classic'
    baseUrl?: string
    paths: {
      [key: string]: string[]
    }
  };
}