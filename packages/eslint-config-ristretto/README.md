# eslint-config-ristretto

<p align="center">
    <img src="https://img.shields.io/npm/dt/eslint-config-ristretto.svg" alt="Total Downloads" />
    <img src="https://img.shields.io/npm/v/eslint-config-ristretto.svg" alt="Latest Release" />
    <a href="https://github.com/just-koohii/eslint-config-ristretto/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/eslint-config-ristretto.svg" alt="License"></a>
</p>

This package provides Ristretto's base .eslintrc (without React plugins) as an extensible shared config.

## Features
- Updated AirBnB rules
- @typescript-eslint
- eslint-plugin-import
- eslint-plugin-promise
- eslint-import-resolver-typescript (used for tsconfig paths)

## Installation

Install **eslint-config-ristretto** with your package manager of choice:

**npm:**

```bash
npm i -D eslint eslint-config-ristretto
```

**yarn:**

```bash
yarn add -D eslint eslint-config-ristretto
```

**pnpm:**

```bash
pnpm i -D eslint eslint-config-ristretto
```

## Usage

Once you have installed the package, add `"ristretto"` to your .eslintrc `extends` array:

```json
{
  "extends": ["ristretto"]
}
```

### Example config

```json
{

  "extends": [
    "ristretto",
    "plugin:prettier/recommended"
  ],
  "plugins": ["prettier"],
  "ignorePatterns": ["node_modules"],
  "rules": {
    "prettier/prettier": [
      "error",
      {},
      {
        "usePrettierrc": true,
      },
    ]
  }
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
    "plugin:prettier/recommended"
  ],
  "plugins": ["prettier"],
  "ignorePatterns": ["node_modules"],
  "rules": {
    "prettier/prettier": [
      "error",
      {},
      {
        "usePrettierrc": true,
      },
    ]
  }
}
```