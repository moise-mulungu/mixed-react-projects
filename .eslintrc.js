/* 

https://github.com/eslint/eslint
npm init @eslint/config # accepted all the defaults

DM: todoDM: upgrade to latest NextJS, then https://nextjs.org/docs/basic-features/eslint

DM: I installed the 'standard' "Style Guide" "linter and code fixer"
DM: "Adopting standard style means ranking the importance of code clarity and community conventions higher than personal style."
DM: todoMM: install these extensions:
https://github.com/standard/standard#visual-studio-code
DM: todoDM: To check code inside Markdown files, use standard-markdown.
prettier-standard-vscode
DM: todoDM: https://medium.com/nerd-for-tech/setting-up-eslint-with-standard-and-prettier-be245cb9fc64 https://github.com/sheerun/prettier-standard https://github.com/npetruzzelli/eslint-config-prettier-standard
DM: Moise, I added the 'standard' esLint rule-set. I'm going to disable the not-useful rules as I see them. Later, we may be able to make 'standard' style formatting happen with the help of Prettier, but there are some Standard rules I dislike. Example: "comma-dangle". I'll also disable rules that Prettier formats automatically, otherwise you see RED everywhere while you're typing.
*/

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'standard', 'standard-jsx'],
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
    // DM: not working ... check https://github.com/standard/eslint-config-standard/blob/master/.eslintrc.json
    'standard/no-unused-vars': 'warn',
    'standard/comma-dangle': 'off',
    'comma-dangle': 'off',
  },
}
