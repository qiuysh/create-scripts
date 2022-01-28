module.exports = {
  parser: 'esprima',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],                              
  env: {
    es6: true,
    node: true,
    commonjs: true  
  },
  rules: {
    "prefer-const": "warn",
    "no-var": "warn",
    "one-var": "warn",
    "no-sequences": "warn",
    "no-cond-assign": "warn",
    "no-unused-expressions": ["warn", { "allowTernary": true }],
    "no-import-assign": "warn",
    "no-nested-ternary": "warn",
    "no-bitwise": "warn",
    "no-void": "warn",
    "no-restricted-globals": "warn",
    "yoda": "off",
    "prefer-destructuring": "warn",
    "class-methods-use-this": "warn"
  }
};