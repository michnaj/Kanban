module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
    },
    "extends": [
        "defaults"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
        "dollar-sign",
        "jquery"
    ],
    "rules": {       
        "indent": [
            "error" ,
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
				],
				"no-undef": 0,
				"no-unused-vars": 0,
        "jquery/no-ajax": 0,
        "jquery/no-animate": 2,
        "jquery/no-attr": 0,
        "jquery/no-bind": 2,
        "jquery/no-class": 0,
        "jquery/no-clone": 2,
        "jquery/no-closest": 2,
        "jquery/no-css": 2,
        "jquery/no-data": 2,
        "jquery/no-deferred": 2,
        "jquery/no-delegate": 2,
        "jquery/no-each": 2,
        "jquery/no-fade": 2,
        "jquery/no-filter": 2,
        "jquery/no-find": 0,
        "jquery/no-global-eval": 2,
        "jquery/no-has": 2,
        "jquery/no-hide": 0,
        "jquery/no-html": 0,
        "jquery/no-in-array": 2,
        "jquery/no-is": 2,
        "jquery/no-map": 2,
        "jquery/no-merge": 2,
        "jquery/no-param": 2,
        "jquery/no-parent": 2,
        "jquery/no-parents": 2,
        "jquery/no-parse-html": 2,
        "jquery/no-prop": 2,
        "jquery/no-proxy": 2,
        "jquery/no-serialize": 2,
        "jquery/no-show": 2,
        "jquery/no-sizzle": 0,
        "jquery/no-slide": 2,
        "jquery/no-text": 0,
        "jquery/no-toggle": 2,
        "jquery/no-trigger": 2,
        "jquery/no-trim": 2,
        "jquery/no-val": 0,
        "jquery/no-wrap": 2,
        "dollar-sign/dollar-sign": [
            2,
            "ignoreProperties"
        ]
    }
};