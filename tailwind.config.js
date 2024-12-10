/* eslint-disable prettier/prettier */
import { nextui } from '@nextui-org/theme';
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


/** @type {import('tailwindcss').Config} */
module.exports = {

	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {

		}
	},
	darkMode: ["class",],
	plugins: [nextui(), require("tailwindcss-animate"),],
};

