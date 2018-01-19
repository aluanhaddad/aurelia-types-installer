import mz from 'mz';
import path from 'path';

import extractJspmConfig from './extract-jspm-config';

const {fs} = mz;

export default async function* loadJspmConfiguration({baseUrl, framework}: {baseUrl: string, framework: string}) {
  for (const filePath of ['config.js', 'jspm.config.js', 'jspm.dev.js', 'jspm.browser.js', 'jspm.node.js']) {
    if (await fs.exists(baseUrl + path.sep + filePath)) {

      const paths = extractJspmConfig(await fs.realpath(baseUrl + path.sep + filePath), name => name.split('@').length > 1 && !name.match(/aurelia-types-installer/))
        .filter(item => item.indexOf(`${framework}-`) > -1)
        .map(x => x.split(`${framework}-`)[1]);
      yield {configFile: filePath, paths};
    }
  }
}
