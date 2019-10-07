// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: ['prettier', 'ember-es6-class'],
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true
  },
  rules: {
    'generator-star-spacing': ['error', { before: false, after: false }],
    'no-unused-vars': ['error', { args: 'none' }],
    'prettier/prettier': ['error', { singleQuote: true, printWidth: 160 }],
    'ember/classic-decorator-hooks': 'error',
    'ember/classic-decorator-no-classic-methods': 'error',
    'ember-es6-class/no-object-extend': 0
  },
  overrides: [
    // node files
    {
      files: [
        'packages/*/.template-lintrc.js',
        'packages/*/.ember-cli.js',
        'packages/*/config/environment.js',
        'packages/*/ember-cli-build.js',
        'packages/*/tests/dummy/app/app.js',
        'packages/*/tests/dummy/app/router.js',
        'packages/*/index.js',
        'packages/*/testem.js',
        'packages/*/blueprints/*/index.js',
        'packages/*/config/**/*.js',
        'packages/*/lib/*/index.js',
        'packages/*/addon/**',
        'packages/*/addon-test-support/**',
        'packages/*/app/**',
        'packages/*/tests/dummy/app/**',
        'packages/*/tests/dummy/config/**/*.js'
      ],
      env: {
        node: true
      }
    }
  ]
};
