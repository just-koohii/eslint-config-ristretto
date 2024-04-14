# eslint-config-ristretto-react

<p align="center">
    <img src="https://img.shields.io/npm/dt/eslint-config-ristretto-react.svg" alt="Total Downloads" />
    <img src="https://img.shields.io/npm/v/eslint-config-ristretto-react.svg" alt="Latest Release" />
    <a href="https://github.com/just-koohii/eslint-config-ristretto-react/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/eslint-config-ristretto-react.svg" alt="License"></a>
</p>

This package provides Ristretto's .eslintrc with React plugins as an extensible shared config.

## Features
- eslint-config-ristretto
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y

## Installation

Install **eslint-config-ristretto-react** with your package manager of choice:

**npm:**

```bash
npm i -D eslint eslint-config-ristretto-react
```

**yarn:**

```bash
yarn add -D eslint eslint-config-ristretto-react
```

**pnpm:**

```bash
pnpm i -D eslint eslint-config-ristretto-react
```

## Usage

Once you have installed the package, add `"ristretto-react"` to your .eslintrc `extends` array:

```json
{
  "extends": ["ristretto-react"]
}
```

### Example config

```json
{
  "extends": [
    "ristretto-react",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
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
