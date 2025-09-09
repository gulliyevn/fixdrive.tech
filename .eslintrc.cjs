/* eslint-env node */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"eslint:recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: { jsx: true },
	},
	settings: {
		react: { version: "detect" },
		"import/resolver": {
			node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
		},
	},
	rules: {
		"react/prop-types": "off",
	},
};


