import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{ts,tsx}"],

    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },

    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      "import/no-duplicates": "error",

      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/no-explicit-any": "error",

      "brace-style": "error",
      "comma-dangle": ["error", "always-multiline"],
      curly: ["error", "all"],
      eqeqeq: ["error", "always"],

      "no-console": "warn",
      "no-var": "error",

      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
]);
