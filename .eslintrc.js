module.exports = {
  "extends": ["airbnb", "plugin:react-native/all"],
  "plugins": [
    "react",
    "react-native",
    "jsx-a11y",
    "import"
  ],
  // Usar babel del futuro como parser
  "parser": "babel-eslint",
  // Reglas que cambian los defaults
  "rules": {
    // Prohibir punto y coma al final de una línea
    // http://eslint.org/docs/rules/semi
    "semi": ["error", "never"],

    // Prohibir comas en los últimos elementos de una lista
    // http://eslint.org/docs/rules/comma-dangle
    "comma-dangle": ["error", "never"],

    // Permitir jsx también en archivos con extensión .js
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    // No usar .jsx: https://github.com/airbnb/javascript/pull/985#issuecomment-239145468
    "react/jsx-filename-extension": [2, { "extensions": [".js"] }],

    // Obligar espacios antes y después de las llaves en las props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    "react/jsx-curly-spacing": [2, "always"],

    // La primer prop debe ir en una nueva línea si hay varias props y líneas
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    "react/jsx-first-prop-new-line": [2, "multiline-multiprop"],

    // Ninguna regla venía bien
    "object-curly-newline": "off",

    // Label es un reemplazo de native-base para Text
    "react-native/no-raw-text": ["error", { "skip": ["Label"] } ]
  }
}
