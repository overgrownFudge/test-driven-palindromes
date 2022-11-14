module.exports = {
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 6,
  },

  // prettier config
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }], // allowing for single quotes instead of double
    'comma-dangle': ['error', 'always-multiline'], // change code diff report
  },
};