import { fs } from 'mz';

export async function ensureDir(path: string) {
  if (!(await fs.exists(path))) {
    await fs.mkdir(path);
  }
}