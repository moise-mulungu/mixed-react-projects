module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // 'react/react-in-jsx-scope': 'off', // NextJS doesn't require import React in each file
    // 'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': 'off'
  },
},
