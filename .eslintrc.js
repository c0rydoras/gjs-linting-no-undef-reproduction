module.exports = {
  settings: {
    'import/internal-regex': '^an-app/',
  },
  extends: ['@adfinis/eslint-config/ember-app'],
  overrides: [
    {
      files: ['**/*.{js,ts,gjs,gts}'],
      rules: {
        'ember/no-replace-test-comments': 'error',
      },
    },
    {
      files: ['**/*.gjs'],
      parser: 'eslint-plugin-ember/gjs-gts-parser',
      plugins: ['ember'],
      extends: [
        '@adfinis/eslint-config/ember-app',
        'plugin:ember/recommended-gjs',
      ],
    },
    {
      files: ['tests/**/*.{js,ts,gjs,gts}'],
      rules: {
        'ember/no-replace-test-comments': 'error',
      },
    },
  ],
};
