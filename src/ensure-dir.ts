import {fs} from 'mz';

export default async function ensureDir(path: string) {
  try {
    if (!(await fs.readdir(path))) {
      await fs.mkdir(path);
    }
  } catch (e) {
    throw e;
  }
}