module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    },
    "editor.formatOnPaste": false,
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": true,

    },
    "[html]": {
        "editor.formatOnSave": false,
    },
    "[json]": {
        "editor.formatOnSave": false,
    },
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,

};