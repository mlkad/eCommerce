import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactConfig from "eslint-plugin-react/configs/recommended.js";

export default tseslint.config(
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        sourceType: "module"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactConfig.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-target-blank": ["error", { enforceDynamicLinks: "always" }]
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  ...tseslint.configs.recommended
);