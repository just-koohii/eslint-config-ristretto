import { Linter } from "eslint";
import { bestPracticesRules } from "./rules/best-practices";
import { errorRules } from "./rules/errors";
import { es6Rules } from "./rules/es6";
import { importRules } from "./rules/import";
import { nodeRules } from "./rules/node";
import { styleRules } from "./rules/style";
import { variableRules } from "./rules/variables";
import { typescriptRules } from "./rules/typescript";

export const config: Linter.Config = {
  extends: ["plugin:import/recommended", "plugin:import/typescript"],
  plugins: ["import", "promise"],
  settings: {
    "import/extensions": [".js", ".mjs", ".ts"],
    "import/ignore": ["node_modules", "dist", "build", "coverage"],
  },
  rules: {
    ...bestPracticesRules,
    ...errorRules,
    ...es6Rules,
    ...importRules,
    ...nodeRules,
    ...styleRules,
    ...variableRules,
    ...typescriptRules,
  },
};

module.exports = config;