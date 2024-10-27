import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "ES6",
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
    },
  },
  pluginJs.configs.recommended,
];
