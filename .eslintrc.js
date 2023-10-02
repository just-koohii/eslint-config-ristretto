/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    require.resolve("./packages/eslint-config-ristretto/dist"),
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  root: true,
  plugins: ["@typescript-eslint", "prettier"],
  ignorePatterns: ["node_modules", "dist", "coverage"],
  rules: {
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true,
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "__tests__/**/*.ts",
          "src/**/*.spec.ts",
          "packages/**/vitest.config.ts",
        ],
      },
    ],
    "import/no-import-module-exports": "off",
  },
};
