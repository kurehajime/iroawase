import js from '@eslint/js';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';

const browserGlobals = {
    document: 'readonly',
    history: 'readonly',
    localStorage: 'readonly',
    location: 'readonly',
    setTimeout: 'readonly',
    URL: 'readonly',
    URLSearchParams: 'readonly',
    window: 'readonly',
};

export default [
    {
        ignores: [
            'docs/**',
            'node_modules/**',
        ],
    },
    js.configs.recommended,
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: browserGlobals,
            parser: typescriptEslintParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                sourceType: 'module',
            },
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            react: reactPlugin,
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...typescriptEslintPlugin.configs.recommended.rules,
            'no-redeclare': 'off',
            'no-undef': 'off',
            'react/jsx-uses-react': 'off',
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
