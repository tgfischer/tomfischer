import pluginJs from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import eslintParserTypeScript from "@typescript-eslint/parser";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier/flat";

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: eslintParserTypeScript,
    },
  },
  { ignores: [".next/*"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  reactPlugin.configs.flat.recommended,
  {
    plugins: { "react-hooks": hooksPlugin },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    plugins: { "better-tailwindcss": eslintPluginBetterTailwindcss },
    rules: eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
  },
  {
    settings: { react: { version: "detect" } },
    rules: { "react/react-in-jsx-scope": "off" },
  },
  eslintConfigPrettier
];
