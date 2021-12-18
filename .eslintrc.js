module.exports = {
  extends: [
    'next/core-web-vitals',
    '@cabify/eslint-config/recommended',
    'plugin:typescript-sort-keys/recommended',
  ],
  plugins: ['typescript-sort-keys', 'sort-keys-fix'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-default-export': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
  settings: {
    reactVersion: 'detect',
  },
};
