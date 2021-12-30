/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended", // Recommended vue 3 linting configs.
    "eslint:recommended", // ESlint recommended configuration by eslint.
    "plugin:import/recommended", // Linting of ES2015+ import/export syntax.
    "@vue/eslint-config-typescript/recommended", // Recommended vue typescript configs.
    "@vue/eslint-config-prettier", // Specific vue prettier configs.
  ],
  plugins: [
    "import",
    "simple-import-sort", // Plugin for sorting imports in file.
  ],
  rules: {
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default-member": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
  env: {
    "vue/setup-compiler-macros": true, // enable use of vue compiler macros.
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`.
      },
    },
  },
  overrides: [
    {
      files: ["**/__tests__/*.spec.ts", "cypress/integration/**/*.spec.ts"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
};
