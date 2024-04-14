import { ESLint } from "eslint";
import { config } from "../src";
import { iocConfig } from "../src/ioc";

describe("config", () => {
  it("loads default config correctly", async () => {
    const eslint = new ESLint({ overrideConfig: config, useEslintrc: false });

    const code = "const foo = 1;\nconst bar = () => {};\nbar(foo);\n";

    await expect(eslint.lintText(code)).resolves.not.toThrow();
  });

  it("loads ioc config correctly", async () => {
    const eslint = new ESLint({ overrideConfig: iocConfig });

    const code = "const foo = 1;\nconst bar = () => {};\nbar(foo);\n";

    await expect(eslint.lintText(code)).resolves.not.toThrow();
  });
});
