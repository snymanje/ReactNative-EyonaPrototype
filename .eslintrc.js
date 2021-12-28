module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': ['error', { ignore: ['navigation'] }],

    // disable the rule for variables, but enable it for functions and classes
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
    'object-curly-newline': 'off',
  },
};
