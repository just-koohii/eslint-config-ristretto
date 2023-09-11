import { Linter } from "eslint";

export const typescriptRules: Linter.RulesRecord = {
  // Allows @ts-<directive> comments
  // https://typescript-eslint.io/rules/ban-ts-comment
  "@typescript-eslint/ban-ts-comment": "off",
  // Disallow unused variables.
  // https://typescript-eslint.io/rules/no-unused-vars
  "@typescript-eslint/no-unused-vars": [
    "warn",
    {
      ignoreRestSiblings: true,
      argsIgnorePattern: "^_",
    },
  ],
};
