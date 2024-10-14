import pluginJs from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tsplugin from "typescript-eslint";
import prettier from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { ignores: [".next/*"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tsplugin.configs.recommended,
  reactPlugin.configs.flat.recommended,
  ...tailwind.configs["flat/recommended"],
  {
    rules: {
      "tailwindcss/no-custom-classname": ["error", { whitelist: ["dark"] }],
    },
  },
  {
    plugins: { "react-hooks": hooksPlugin },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    settings: { react: { version: "detect" } },
    rules: { "react/react-in-jsx-scope": "off" },
  },
  prettier,
];
