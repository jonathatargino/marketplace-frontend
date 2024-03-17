module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "linebreak-style": [
        "error",
        "unix"
    ],
    "react/prop-types": 0,
    "quotes": [
        "error",
        "double"
    ],
    "semi": [
        "error",
        "always"
    ],
    "react/react-in-jsx-scope": "off"
  }
}
