import { relative } from 'path';
import type { Configuration } from 'lint-staged';

const buildEslintCommand = (filenames: string[]) =>
  `next lint --fix --file ${filenames.map((f) => relative(process.cwd(), f)).join(' --file ')}`;

const buildPrettierCommand = (filenames: string[]) =>
  `prettier --write ${filenames.map((f) => relative(process.cwd(), f)).join(' ')}`;

const config: Configuration = {
  '*.{js,jsx,mjs,cjs,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
  '*.{json,md,css,yml,yaml}': [buildPrettierCommand],
};

export default config;
