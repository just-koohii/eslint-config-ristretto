import { Linter } from "eslint";

export const typescriptRules: Linter.RulesRecord = {
  // Allows explict any
  // https://typescript-eslint.io/rules/no-explicit-any
  "@typescript-eslint/no-explicit-any": "off",
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
  "@typescript-eslint/no-var-requires": "off",
};
