module.exports = {
    parser: 'vue-eslint-parser',

    env: {
        browser: true,
        es2021: true,
        node: true,
    },

    extends: [
        'eslint:vue/vue3-recommended',
        // 'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {},
};
