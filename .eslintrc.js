module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': ["error", "always"],
        "indent": [2, 4],
        'vue/script-indent': ['error', 4, { 'baseIndex': 1 }],
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    }
}
