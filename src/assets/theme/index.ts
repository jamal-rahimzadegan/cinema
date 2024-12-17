// ----Base sections--------------------------------------------------------------------
const radius: Theme["radius"] = {
	extraSmall: "5px",
	small: "10px",
	medium: "10px",
	circle: "50%",
};

const fontSize: Theme["fontSize"] = {
	extraSmall: "10px",
	small: "12px",
	medium: "14px",
	large: "16px",
	extraLarge: "20px",
};

const functions: Theme["functions"] = {};

// ----Light Theme--------------------------------------------------------------------

const light: Theme = {
	type: "light",
	radius,
	fontSize,
	functions,
	colors: {
		BRAND: "#F0491E",
		PAGE_BG: "#fff",
		PRIMARY_TEXT: "#222222",
		SECONDARY_TEXT: "#455A64",
		INTERACTIVE_TEXT: "#0058bc",
		DISABLED_TEXT: "#CFD8DC",
		BACKGROUND: "#e8e8e8",
		HR: "#4F4F4F",
		BOX_BG: "#F3F3F3",
		INPUT_BG: "#F3F3F3",
		BLACK: "#231f20",
		BOX_SHADOW: "1px 1px 5px 0 rgba(0,0,0,.2)",
		GREEN: "#009777",

		CARD_BG: "#fff",
		MODAL_BG: "rgba(0, 0, 0, 0.7)",
		SHADOW: "rgba(0,0,0,.2)",
		HOVER: "#12181818",
		DIM_BORDER: "#4F4F4F",
		BRIGHT_BORDER: "#99899199",
		TRANSPARENT: "transparent",
		RED: "#ff193d",
		WHITE: "#fff",
	},
};

// ----Dark Theme--------------------------------------------------------------------
const dark: Theme = {
	type: "dark",
	radius,
	fontSize,
	functions,
	colors: {
		BRAND: "#F0491E",
		PAGE_BG: "#505052",
		PRIMARY_TEXT: "#fff",
		SECONDARY_TEXT: "#B0BEC5",
		INTERACTIVE_TEXT: "#3498db",
		DISABLED_TEXT: "#CFD8DC",
		BACKGROUND: "#222",
		HR: "#CFD8DC",
		BOX_BG: "#6b6b6b",
		INPUT_BG: "#fff",
		BLACK: "#231f20",
		BOX_SHADOW: "1px 1px 5px 0 rgba(0,0,0,.2)",
		GREEN: "#009777",

		CARD_BG: "#858383",
		MODAL_BG: "rgba(0, 0, 0,0.7)",
		SHADOW: "rgba(0,0,0,.2)",
		HOVER: "#12181818",
		DIM_BORDER: "#4F4F4F",
		BRIGHT_BORDER: "#99899199",
		TRANSPARENT: "transparent",
		RED: "#ff193d",
		WHITE: "#fff",
	},
};

// ----Detect  theme--------------------------------------------------------------------
function getTheme(theme): Theme {
	return theme === "dark" ? dark : light;
}

export { getTheme };
export { GlobalStyle } from "./global-style";
