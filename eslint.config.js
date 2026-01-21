import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

export default [
  // Global ignores (replaces .eslintignore for flat config)
  {
    ignores: ['dist/**', 'node_modules/**', 'webpack.config.cjs'],
  },

  // Configuración base de JavaScript
  js.configs.recommended,

  // Configuración recomendada de React (formato Flat)
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Tus personalizaciones
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    rules: {
      semi: ['error', 'always'],
      'no-console': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 0,
    },
  },

  // Cypress test files configuration
  {
    files: ['cypress/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        before: 'readonly',
        after: 'readonly',
        expect: 'readonly',
      },
    },
  },

  // Node.js files configuration
  {
    files: ['app.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
];
