interface Theme {
	type: ThemeSkin;
	radius: RADIUS;
	fontSize: FontSize;
	colors: Colors;
	functions: Functions;
}

type ThemeSkin = "dark" | "light";

interface RADIUS {
	extraSmall: string;
	small: string;
	medium: string;
	circle: string;
}

interface FontSize {
	extraSmall: string;
	small: string;
	medium: string;
	large: string;
	extraLarge: string;
}

interface Colors {
	BRAND: string;
	PAGE_BG: string;
	PRIMARY_TEXT: string;
	SECONDARY_TEXT: string;
	INTERACTIVE_TEXT: string;
	DISABLED_TEXT: string;
	BACKGROUND: string;
	HR: string;
	BOX_BG: string;
	INPUT_BG: string;
	BLACK: string;
	BOX_SHADOW: string;
	GREEN: string;

	CARD_BG: string;
	MODAL_BG: string;
	SHADOW: string;
	HOVER: string;
	DIM_BORDER: string;
	BRIGHT_BORDER: string;
	TRANSPARENT: string;
	RED: string;
	WHITE: string;
}

interface Functions {
	lightenColor?: Function;
	darkenColor?: Function;
	alphaColor?: Function;
}
