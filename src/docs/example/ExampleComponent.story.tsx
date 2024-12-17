import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import ExampleComponent from "./ExampleComponent";

// 1- Create a template of your component
const ExampleComponentTemplate: Story<ComponentProps<typeof ExampleComponent>> = (args) => (
	<ExampleComponent {...args} />
);

// 2- Define its variations (and props)
export const Normal = ExampleComponentTemplate.bind({});
Normal.args = { fontWeight: "normal", fontSize: 13 };

export const Bold = ExampleComponentTemplate.bind({});
Bold.args = {
	fontWeight: "bold",
	fontSize: 18,
};

// 3- export your component
export default {
	title: "Components/Example",
	component: ExampleComponent,
} as Meta;
