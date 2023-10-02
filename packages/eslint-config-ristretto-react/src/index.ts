import { Linter } from "eslint";
import { reactRules } from "./rules/react";
import { reactA11yRules } from "./rules/react-a11y";
import { reactHooksRules } from "./rules/react-hooks";

export const config: Linter.Config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    es2021: true,
    browser: true,
  },
  extends: ["eslint-config-ristretto"],
  plugins: ["@typescript-eslint", "jsx-a11y", "react-hooks", "react"],
  settings: {
    react: {
      version: "detect",
    },
    "import/extensions": [".js", ".mjs", ".ts", ".tsx"],
    "import/ignore": [
      "node_modules",
      "dist",
      ".next",
      "build",
      "coverage",
      "\\.(scss|css|less|hbs|svg|json)$",
    ],
  },
  rules: {
    ...reactRules,
    ...reactA11yRules,
    ...reactHooksRules,
  },
};

module.exports = config;
