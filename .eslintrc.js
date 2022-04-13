module.exports = {
  extends: '@ysl07',
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/multi-word-component-names': 'off',
  },
}
