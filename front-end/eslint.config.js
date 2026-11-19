
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    {
        ignores: ["dist/**", "node_modules/**"]
    },
    {
        files: ["**/*.{js,jsx}"],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },

        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh
        },

        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            "no-unused-vars": [
                "warn",
                {
                    varsIgnorePattern: "^[A-Z_]",
                    argsIgnorePattern: "^_"
                }
            ],

            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",

            "react-refresh/only-export-components": "warn"
        },

        settings: {
            react: {
                version: "detect"
            }
        }
    }
];
