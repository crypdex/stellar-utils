module.exports = {
  env: {
    node: true,
    es6: true,
    'jest/globals': true
  },
  extends: ['prettier'],
  parserOptions: {
    ecmaVersion: 8,
    // sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: 'eslint:recommended',
  // https://github.com/prettier/eslint-plugin-prettier
  plugins: ['prettier', 'prefer-object-spread', 'jest'], // Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
  rules: {
    // 'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    'prefer-object-spread/prefer-object-spread': 'error',
    // Rules not in 'eslint:recommended'
    eqeqeq: ['error', 'smart'],
    'no-useless-return': 'error',
    'valid-jsdoc': [
      'warn',
      {
        requireParamDescription: false,
        requireReturn: false,
        preferType: {
          Boolean: 'boolean',
          Number: 'number',
          object: 'object',
          String: 'string'
        },
        matchDescription: '.+',
        requireReturnDescription: false
      }
    ],
    'no-useless-concat': 'error',
    // 'func-style': ['error', 'declaration'],
    // Node and ES6+ rules
    'global-require': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { object: true, array: true }],
    'prefer-template': 'error',
    'require-await': 'error',
    'no-return-await': 'error',
    'no-console': 'off'
  }
}
