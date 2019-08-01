import test from 'blue-tape';
import fs from 'mz/fs';
import process from 'process';

const input = process.argv[2];
console.info(process.argv);

test('output should contain expected successfully retrieved declaration count', async ({ok, plan}) => {
  plan(1);
  const data = await fs.readFile(input);
  ok(data && String(data).match(/Installed 24 aurelia type declarations/g));
});

test('output should contain expected unsuccessfully retrieved declaration count', async ({ok, plan}) => {
  plan(1);
  const data = await fs.readFile(input);
  ok(data && String(data).toString().match(/Unable to locate type declarations for 2 aurelia packages/g));
});
