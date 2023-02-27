/* 

https://github.com/eslint/eslint
npm init @eslint/config # accepted all the defaults

DM: todoDM: upgrade to latest NextJS, then https://nextjs.org/docs/basic-features/eslint
*/

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off', // NextJS doesn't require import React in each file
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
  },
}
