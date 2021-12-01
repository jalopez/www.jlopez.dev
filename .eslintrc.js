module.exports = {
  extends: ['next/core-web-vitals', '@cabify/eslint-config/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-default-export': 'off',
  },
};
