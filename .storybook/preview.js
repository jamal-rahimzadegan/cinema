import { create } from "@storybook/theming";

const theme = create({
	base: "left",
	brandTitle: "APP Ticket",
	brandImage: null,
	appContentBg: "lightgrey",
});

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	readme: {
		codeTheme: "duotone-sea",
	},
	options: {
		theme,
		storySort: {
			method: "alphabetical",
			order: ["Intro"],
		},
	},
};
