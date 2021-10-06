module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  plugins: ['vue'],
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  rules: {
    // override/add rules settings here
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: 'babel-eslint',
    allowImportExportEverywhere: false,
  },
}