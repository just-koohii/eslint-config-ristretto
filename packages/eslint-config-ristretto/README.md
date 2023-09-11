# eslint-config-ristretto

<p align="center">
    <img src="https://img.shields.io/npm/dt/eslint-config-ristretto.svg" alt="Total Downloads" />
    <img src="https://img.shields.io/npm/v/eslint-config-ristretto.svg" alt="Latest Release" />
    <a href="https://github.com/just-koohii/eslint-config-ristretto/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/eslint-config-ristretto.svg" alt="License"></a>
</p>

This package provides Ristretto's base .eslintrc (without React plugins) as an extensible shared config.

## Installation

Install **eslint-config-ristretto** and the required peer-dependencies:

**npm:**

```bash
npm i -D eslint eslint-config-ristretto eslint-plugin-import eslint-plugin-promise
```

**yarn:**

```bash
yarn add -D eslint eslint-config-ristretto eslint-plugin-import eslint-plugin-promise
```

**pnpm:**

```bash
pnpm i -D eslint eslint-config-ristretto eslint-plugin-import eslint-plugin-promise
```

## Usage

Once you have installed the packages, add `"ristretto"` to your .eslintrc `extends` array:

```json
{
  "extends": ["ristretto"]
}
```

### Example config

```json
{
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "ristretto",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "ignorePatterns": ["node_modules"],
  "rules": {}
}
```
----

If your project uses any type IoC (e.g. [NestJs]("https://github.com/nestjs/nest")), also add `"ristretto/ioc"` to your .eslintrc `extends` array:

```json
{
  "extends": ["ristretto", "ristretto/ioc"]
}
```

### Example config

```json
{
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "ristretto",
    "ristretto/ioc",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "ignorePatterns": ["node_modules"],
  "rules": {}
}
```