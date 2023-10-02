module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    require.resolve("./packages/eslint-config-ristretto/dist"),
    "plugin:@typescript-eslint/recommended",
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
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "__tests__/**/*.ts",
          "src/**/*.spec.ts",
          "vitest.config.ts",
          "src/dev.ts",
        ],
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "import/no-import-module-exports": "off",
  },
};
