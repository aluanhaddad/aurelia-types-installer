import process from 'process';
import fs from 'mz/fs';
import test from 'blue-tape';

const input = process.argv[2];
console.error(process.argv);
test('ouput should contain expected successfully retrieved declaration count', async ({ok, plan}) => {
  plan(1);
  const data = await fs.readFile(input);
  ok(data && String(data).match(/Installed 24 aurelia type declarations/g));
});

test('ouput should contain expected unsuccessfully retrieved declaration count', async ({ok, plan}) => {
  plan(1);
  const data = await fs.readFile(input);
  ok(data && String(data).toString().match(/Unable to locate type declarations for 2 aurelia packages/g));
});