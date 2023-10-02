import { Linter } from "eslint";
import { iocRules } from "./rules/ioc";

export const iocConfig: Linter.Config = {
  rules: iocRules,
};

module.exports = iocConfig;
