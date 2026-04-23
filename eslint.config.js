import antfu from '@antfu/eslint-config'
import prettier from 'eslint-config-prettier'

export default antfu({
  react: true,

  typescript: true,

  ignores: ['dist', 'build', 'coverage', 'node_modules', 'eslint.config.js', 'public/mockServiceWorker.js'],

  rules: {
    'no-console': 'warn',
    'antfu/if-newline': 'off',
    'style/brace-style': ['error', '1tbs'],
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'warn',
    'react/prefer-fragment-shorthand': 'off',
    'style/semi': 'off',
    'antfu/top-level-function': 'off',
  },
}, {
  files: ['**/*.d.ts'],
  rules: {
    'ts/no-namespace': 'off',
  },
}).append(prettier)
