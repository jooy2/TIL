module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'airbnb/base',
  ],
  rules: {
    'linebreak-style': 0,
    'arrow-parens': 0,
    'max-len': 0,
  },
};
