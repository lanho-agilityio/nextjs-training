module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["next", "eslint:recommended", "plugin:jsx-a11y/recommended", "plugin:@typescript-eslint/recommended",  "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jsx-a11y", "@typescript-eslint"],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-var-requires": "off"
  },
};