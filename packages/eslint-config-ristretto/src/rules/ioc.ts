import { Linter } from "eslint";

export const iocRules: Linter.RulesRecord = {
  "no-useless-constructor": "off",
  "no-empty-function": ["off", { allow: ["constructors"] }],
};
