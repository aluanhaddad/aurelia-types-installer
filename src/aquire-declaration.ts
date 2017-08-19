import {fs} from 'mz';
import ensureDir from './ensure-dir';
import requestPromise = require('request-promise');

export default async function retrieveFromGitHub(baseUrl: string, destinationDir: string, versionedName: string, prefix: string) {
  const {name, version} = nameAndVesion(versionedName);

  const url = `https://raw.githubusercontent.com/${prefix}/${name}/${version}/dist/${prefix}-${name}.d.ts`;

  const destDir = `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}`;
  await ensureDir(destDir);

  const data = await requestPromise(url, {method: 'GET'}) as string;
  await save({baseUrl, destinationDir, versionedName, prefix}, data);
  return `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}/${prefix}-${name}`;
}

async function save({baseUrl, destinationDir, versionedName, prefix}: {destinationDir: string, baseUrl: string, versionedName: string, prefix: string}, declaration: string) {
  const {name, version} = nameAndVesion(versionedName);
  const targetFile = `${baseUrl}/${destinationDir}/${prefix}-${name}@${version}/index.d.ts`;
  const file = fs.createWriteStream(targetFile, 'UTF8');
  await file.write(declaration);
}

function nameAndVesion(versionedName: string) {
  const [name, version] = versionedName.split('@');
  return {name, version};
}