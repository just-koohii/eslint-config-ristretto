import { ESLint } from "eslint";
import { config } from "../src";

describe("config", () => {
  it("loads config correctly", async () => {
    const eslint = new ESLint({ overrideConfig: config, useEslintrc: false });

    const code = "const foo = 1;\nconst bar = () => {};\nbar(foo);\n";

    await expect(eslint.lintText(code)).resolves.not.toThrow();
  });
});
