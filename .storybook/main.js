module.exports = {
	stories: ["../src/**/*.story.@(ts|tsx|mdx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
	framework: "@storybook/react",
	features: {
		previewMdx2: true,
	},
};
