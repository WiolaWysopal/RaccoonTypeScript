import eslintPluginPrettier from 'eslint-plugin-prettier';
//import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintParserTypescript from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules'],
  },
  {
    languageOptions: {
      parser: eslintParserTypescript,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
];
