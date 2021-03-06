import mz from 'mz';
import requestPromise from 'request-promise';

import ensureDir from './ensure-dir';

const {fs} = mz;

export default async function acquireDeclaration({baseUrl, destinationDir, versionedName, prefix}: {baseUrl: string; destinationDir: string; versionedName: string; prefix: string; }) {
  const {name, version} = nameAndVersion(versionedName);

  const url = `https://raw.githubusercontent.com/${prefix}/${name}/${version}/dist/${prefix}-${name}.d.ts`;

  const destDir = `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}`;
  await ensureDir(destDir);

  const data = await requestPromise(url, {method: 'GET'});
  await save({baseUrl, destinationDir, versionedName, prefix}, data);
  return `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}/${prefix}-${name}`;
}

async function save({baseUrl, destinationDir, versionedName, prefix}: {destinationDir: string, baseUrl: string, versionedName: string, prefix: string}, declaration: string) {
  const {name, version} = nameAndVersion(versionedName);
  const targetFile = `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}/index.d.ts`;
  const file = fs.createWriteStream(targetFile, 'UTF8');
  file.write(declaration);
}

function nameAndVersion(versionedName: string) {
  const [name, version] = versionedName.split('@');
  return {name, version};
}