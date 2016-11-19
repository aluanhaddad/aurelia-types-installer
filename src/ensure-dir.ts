import { fs } from 'mz';

export async function ensureDir(path: string) {
  try {
    if (!(await fs.readdir(path))) {
      var dir = await fs.mkdir(path);

    }
  } catch (message) {
    console.error(message);
  }

}