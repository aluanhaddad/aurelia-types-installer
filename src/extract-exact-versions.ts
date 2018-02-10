import extractJspmConfig from './extract-jspm-config';
import fs from 'mz/fs';
import path from 'path';
export default async function* (baseUrl: string) {
  for (const filePath of ['config.js', 'jspm.config.js', 'jspm.dev.js', 'jspm.browser.js', 'jspm.node.js']) {
    if (await fs.exists(baseUrl + path.sep + filePath)) {

      const paths = extractJspmConfig(await fs.realpath(baseUrl + path.sep + filePath), name => name.split('@').length > 1 && !name.match(/aurelia-types-installer/));

      yield {configFile: filePath, paths};
    }
  }
}