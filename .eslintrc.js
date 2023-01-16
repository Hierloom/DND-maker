module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        "plugin:prettier/recommended",
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
    ],
    "plugins": [
        "json-format"
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        "sort-imports": [ "error", {
            "ignoreCase": false,
            "ignoreDeclarationSort": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": [ "none", "all", "multiple", "single" ],
            "allowSeparatedGroups": false
        } ]
    }
};