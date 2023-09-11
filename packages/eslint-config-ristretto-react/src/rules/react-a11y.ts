import { Linter } from "eslint";

export const reactA11yRules: Linter.RulesRecord = {
  // Enforce that all elements that require alternative text have meaningful information
  // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
  "jsx-a11y/alt-text": [
    "error",
    {
      elements: ["img", "object", "area", 'input[type="image"]'],
      img: [],
      object: [],
      area: [],
      'input[type="image"]': [],
    },
  ],

  // Enforce ARIA state and property values are valid.
  // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
  "jsx-a11y/aria-proptypes": "error",

  // Require ARIA roles to be valid and non-abstract
  // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
  "jsx-a11y/aria-role": ["error", { ignoreNonDOM: false }],

  // ensure iframe elements have a unique title
  // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
  "jsx-a11y/iframe-has-title": "error",

  // Prevent img alt text from containing redundant words like "image", "picture", or "photo"
  // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
  "jsx-a11y/img-redundant-alt": "error",
};

module.exports = reactA11yRules