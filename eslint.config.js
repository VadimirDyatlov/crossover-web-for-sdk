import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,

  typescript: true,

  formatters: {
    css: true,
    html: true,
  },

  ignores: ['dist', 'build', 'coverage', 'node_modules'],

  rules: {
    'no-console': 'warn',
    'antfu/if-newline': 'off',
    'style/brace-style': ['error', '1tbs'],

    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'warn',
    'react/prefer-fragment-shorthand': 'off',
  },
}, {
  files: ['**/*.d.ts'],
  rules: {
    'ts/no-namespace': 'off',
  },
})
