import globals from "globals";
import vue from "eslint-plugin-vue";
import jest from 'eslint-plugin-jest';

export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"]
  },
  {
    ignores: ["output/"]
  },
  {
    languageOptions: { globals: globals.browser }
  },
  {
    plugins: { jest },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },
  ...vue.configs["flat/essential"],
  {
    rules: {
      semi: ['error', 'always'], // Enforce semicolons
      curly: ['error', 'multi'], // Enforce curly braces only for multi-line blocks
      'jest/valid-title': 'off', // To be removed
      'jest/no-standalone-expect': 'off', // To be removed
      'jest/no-disabled-tests': 'off', // To be removed
      'jest/no-conditional-expect': 'off', // To be removed
      'jest/valid-expect': 'off', // To be removed
      'jest/no-test-prefixes': 'off', // To be removed
      'jest/no-export': 'off', // To be removed
      'jest/no-alias-methods': 'off', // To be removed
      'jest/expect-expect': 'off', // To be removed
      'jest/valid-describe-callback': 'off', // To be removed
      'vue/require-v-for-key': 'off', // To be removed
      'vue/no-reserved-component-names': 'off', // To be removed
    }
  }
];
