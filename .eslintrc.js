module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // intellij idea's default formatting does not use spacing here...
    'object-curly-spacing': 0,
    'space-before-function-paren': 0,
    // disable no-multiple-template-root, vue 3 supports multiple template root!
    'vue/no-multiple-template-root': 0,
    // keys on template tags are fine in Vue 3
    'vue/no-v-for-template-key': 0,
    // allow arguments to v-model to modify referenced prop names
    'vue/no-v-model-argument': 0,
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'class-methods-use-this': 0,
    'max-len': [
      'error', {
        code: 180,
        ignoreComments: true,
        ignoreUrls: true
      }
    ],
    '@typescript-eslint/ban-ts-ignore': 0
  },
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@babel/eslint-parser'
  }
}
