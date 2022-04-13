module.exports = {
  extends: [
    'next/core-web-vitals',
    '@cabify/eslint-config/recommended',
    'plugin:typescript-sort-keys/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['typescript-sort-keys', 'sort-keys-fix'],
  rules: {
    'import/no-default-export': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
  settings: {
    reactVersion: 'detect',
  },
};
