import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

export default [
  // Configuración base de JavaScript
  js.configs.recommended,

  // Configuración recomendada de React (formato Flat)
  pluginReact.configs.flat.recommended,

  // Tus personalizaciones
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest, // Útil para el Pokedex si usas Jest
      },
    },
    rules: {
      semi: ['error', 'always'],
      'no-console': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 0, // No necesario en React moderno
    },
  },
];
