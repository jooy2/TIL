import { globalIgnores } from 'eslint/config';
import pluginJs from '@eslint/js';
import pluginTypeScriptESLint from 'typescript-eslint';
import parserTypeScript from '@typescript-eslint/parser';
import configPrettier from 'eslint-config-prettier';

import globals from 'globals';

export default pluginTypeScriptESLint.config(
	pluginJs.configs.recommended,
	pluginTypeScriptESLint.configs.recommended,
	globalIgnores([
		'**/.idea',
		'**/.vscode',
		'**/.github',
		'**/node_modules',
		'**/docs/.vitepress/cache',
		'**/docs/.vitepress/.temp',
		'**/dist',
		'**/package-lock.json'
	]),
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node
			},
			parserOptions: {
				parser: parserTypeScript,
				ecmaVersion: 2022,
				requireConfigFile: false
			}
		},
		rules: {
			eqeqeq: 'error',
			'no-unused-vars': 'error',
			'no-case-declarations': 'off',
			'no-trailing-spaces': 'error',
			'no-unsafe-optional-chaining': 'off',
			'no-control-regex': 'off',
			'@typescript-eslint/no-explicit-any': 'off'
		}
	},
	configPrettier
);
