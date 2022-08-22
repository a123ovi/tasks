module.exports = {
  root: true,
  env: { jest: true, node: true },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['standard', 'prettier', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'no-console': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'max-len': [
      "error", {"code" : 150}
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/camelcase': 0,
  },
  overrides: [
    {
     files: ["docs/SwaggerText.ts"],
        rules: {
           "max-len": "off",
           "no-multi-str": "off"
        }
    }
  ]
};
