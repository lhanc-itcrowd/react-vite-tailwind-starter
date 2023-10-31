module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'class-methods-use-this': 'off',
		'no-console': 'error',
		'no-param-reassign': [
			'error',
			{ props: true, ignorePropertyModificationsForRegex: ['^state'] },
		],
		'no-restricted-exports': 'off',
		'no-restricted-syntax': [
			2,
			'ForInStatement',
			'LabeledStatement',
			'WithStatement',
		],
		'no-unused-vars':
			'off' /* Turned off because this is handled by @typescript/eslint" */,
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				depth: 1,
			},
		],
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'react/jsx-filename-extension': 'off',
		'react/jsx-no-bind': 'off',
		'react/jsx-sort-props': [
			1,
			{
				callbacksLast: true,
				shorthandFirst: false,
				noSortAlphabetically: false,
				reservedFirst: true,
			},
		],
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/ban-ts-comment': 'off',
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@', './src'],
					['@components', './src/components'],
					['@lib', './src/lib'],
				],
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
			},
		},
	},
};
