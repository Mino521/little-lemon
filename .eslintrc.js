/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // tsconfigRootDir: "",
    project: ["./tsconfig.eslint.json"],
  },
  plugins: ["@typescript-eslint", "prettier"],
  root: true,
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-constant-binary-expression": "error",
    "no-duplicate-imports": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "arrow-body-style": ["error", "as-needed"],
    "block-scoped-var": "error",
  },
};
