module.exports = {
  env: {
    browser: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  rules: {
    semi: ['error', 'always'], // Enforce semicolons
    curly: ['error', 'multi'], // Enforce curly braces only for multi-line blocks
    'no-return-assign': 0, // Allow assignments in one-line arrow functions
    'no-var': 0, // Allow use of var to support older browsers for now
    'no-unused-expressions': 0, // Allow unassigned expressions with side-effects
    'prefer-promise-reject-errors': 0, // Allow non-errors in rejected promises
    'no-new': 0 // Allow unassigned new calls with side effects
  }
};
