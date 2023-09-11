# eslint-config-ristretto-react

<p align="center">
    <img src="https://img.shields.io/npm/dt/eslint-config-ristretto-react.svg" alt="Total Downloads" />
    <img src="https://img.shields.io/npm/v/eslint-config-ristretto-react.svg" alt="Latest Release" />
    <a href="https://github.com/just-koohii/eslint-config-ristretto-react/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/eslint-config-ristretto-react.svg" alt="License"></a>
</p>

This package provides Ristretto's .eslintrc with React plugins as an extensible shared config.

## Installation

Install **eslint-config-ristretto-react** and the required peer-dependencies:

**npm:**

```bash
npm i -D eslint eslint-config-ristretto-react eslint-plugin-import eslint-plugin-promise eslint-plugin-jsx-a11y eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks
```

**yarn:**

```bash
yarn add -D eslint eslint-config-ristretto-react eslint-plugin-import eslint-plugin-promise eslint-plugin-jsx-a11y eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks
```

**pnpm:**

```bash
pnpm i -D eslint eslint-config-ristretto-react eslint-plugin-import eslint-plugin-promise eslint-plugin-jsx-a11y eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks
```

## Usage

Once you have installed the packages, add `"ristretto-react"` to your .eslintrc `extends` array:

```json
{
  "extends": ["ristretto-react"]
}
```

### Example config

```json
{
  "env": {
    "es2021": true,
    "node": true,
    "browser": true
  },
  "extends": [
    "ristretto-react",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2021,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "ignorePatterns": ["node_modules"],
  "rules": {}
}
```
