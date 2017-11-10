import deepEqual = require('deep-equal');
import mz = require('mz');
import path = require('path');

import downloadDeclaration from './aquire-declaration';
import ensureDir from './ensure-dir';
import loadJspmConfiguration from './load-jspm-configuration';

const {fs} = mz;

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
  for await (const {paths, configFile} of loadJspmConfiguration({baseUrl, framework})) {
    successSummary += `\nUsing config source: ${configFile}:\n`;
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
    }))).reduce(({successes, failures}, result) =>
      result.error
        ? {successes, failures: [...failures, result]}
        : {successes: [...successes, result.message], failures},
      {successes: [] as string[], failures: [] as {message: string, error: string}[]});

    const generatedTsConfigPath = baseUrl + path.sep + 'tsconfig.paths.json';
    const tsConfig: TSConfig = require(await fs.realpath(baseUrl + path.sep + 'tsconfig.json'));
    const generatedTsConfig: TSConfig = await fs.exists(generatedTsConfigPath)
      ? require(generatedTsConfigPath)
      : {
        compilerOptions: {
          baseUrl: '.',
          paths: {}
        }
      };

    if (!generatedTsConfig.compilerOptions) {
      generatedTsConfig.compilerOptions = {
        ...generatedTsConfig.compilerOptions || {},
        paths: tsConfig.compilerOptions.paths || {},
        baseUrl: '.',
      };
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
      const serializedTsConfigPathsPath = JSON.stringify(generatedTsConfig, (_, value) => value, 2);
      await fs.writeFile(`${baseUrl}${path.sep}tsconfig.paths.json`, serializedTsConfigPathsPath);
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