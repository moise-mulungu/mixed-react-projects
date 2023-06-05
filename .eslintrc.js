/* 




DM: todoDM: custom eslint rule to ensure that default export matches module name



*/

export default [
  {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'standard'],
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
      // customizations for "standard"
      'comma-dangle': 'off',
      'no-trailing-spaces': 'off', // also could VS Code set "files.trimTrailingWhitespace": true
      // note: Prettier does not format comments at all
      'no-multiple-empty-lines': 'off',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always', // convention across many languages
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      /* 
       Need Prettier to use ESLint to format
       Or, just use ESLint extension to format, why prettier?
       That new "Prettier ESLint" extension?
       https://stackoverflow.com/questions/69787795/prettier-doesnt-format-based-on-my-eslint-config
       why? multiline-ternary with always-multiline option is good
            however, Prettier undoes it
            but, Prettier doesn't have an option for that
    
    */

      // ttd: use the always-multiline option; otherwise no: adds too many extra lines; doesn't help readability
      // 'multiline-ternary': 'off',

      // END customizations for "standard"
    },
  },
]
