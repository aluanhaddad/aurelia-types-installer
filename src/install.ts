﻿import json from 'comment-json';
import deepEqual from 'deep-equal';
import mz from 'mz';
import path from 'path';

import acquireDeclaration from './acquire-declaration';
import ensureDir from './ensure-dir';
import InstallOptions from './install-options';
import loadJspmConfiguration from './load-jspm-configuration';
import TSConfig from './ts-config';

const {fs} = mz;

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
          const result = await acquireDeclaration({baseUrl, destinationDir: dest, versionedName: path, prefix: framework});
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
      {successes: <string[]>[], failures: <{message: string, error: string}[]>[]});

    const generatedTsConfigPath = baseUrl + path.sep + 'tsconfig.paths.json';
    const rawConfig = await fs.readFile(baseUrl + path.sep + 'tsconfig.json');
    const tsConfig = <TSConfig>json.parse(<string><{}>rawConfig);
    const generatedTsConfig = await fs.exists(generatedTsConfigPath)
      ? <TSConfig>json.parse(<string><{}>(await fs.readFile(generatedTsConfigPath)))
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

    for (const path of paths) {
      const entryKey = `${framework}-${path.split('@')[0]}`;
      const existingEntries = compilerOptions.paths[entryKey] || [];
      const newEntry = `${dest}/${framework}-${path}${explicitIndex ? '/index' : ''}`;
      const newEntries = [];
      const relativeEntries = existingEntries.filter(entry => entry.startsWith('.'));
      for await (const path of prunePaths(existingEntries.filter(entry => entry !== newEntry))) {
        newEntries.push(path);
      }
      compilerOptions.paths[entryKey] = [...relativeEntries, newEntry, ...newEntries];
    }

    if (!explicitIndex && !tsConfig.compilerOptions.moduleResolution && !generatedTsConfig.compilerOptions.moduleResolution) {
      generatedTsConfig.compilerOptions.moduleResolution = 'node';
    }

    if (!deepEqual(generatedTsConfig, tsConfig, {strict: true})) {
      const serializedTsConfigPathsPath = json.stringify(generatedTsConfig, undefined, 2);
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

  async function* prunePaths(paths: string[]) {
    for (const path of paths) {
      const [pkgDir] = /(.*\@[^/]*)/.exec(path) || [undefined];
      const exists = await fs.exists(`${baseUrl}/${pkgDir}`);
      if (exists) {
        yield path;
      }
    }
  }
}