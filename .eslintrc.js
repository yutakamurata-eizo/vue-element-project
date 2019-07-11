module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    'standard',
    'prettier'
  ],
  plugins: [
    'vue',
    'prettier',
    'jest'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'prettier/prettier': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
