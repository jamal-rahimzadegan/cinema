import React, { Suspense, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTheme, GlobalStyle } from "assets/theme";
import { useNavigation } from "hooks";
import { StyledLayout } from "./style";
import Fallback from "./Fallback";

export default function Layout({ children }): JSX.Element {
	const { pathname } = useLocation();
	const navigation = useNavigation();
	const { theme } = useSelector((state: any) => state.ui);
	const isOnHomePage = ["/", "/app_ticket/"].includes(pathname);
	const isOnTickets = pathname.includes("/my-tickets");

	// TODO: implement it when the need theme
	// const callAction = useCallAction();
	// const updateTheme = () => {
	// 	callAction("UPDATE_THEME", { theme: theme === "dark" ? "light" : "dark" });
	// };

	const handleBackPress = () => {
		const bridge = (window as any)?.appGlobal?.application;

		bridge?.callMeOnBackButtonPress(() => {
			if (isOnHomePage) return bridge?.goBack();
			if (isOnTickets) return navigation.replace("/");
			return navigation.goBack();
		});
	};

	useEffect(handleBackPress, [pathname]);

	return (
		<ThemeProvider theme={getTheme(theme)}>
			<GlobalStyle />
			{/*<button onClick={updateTheme}>change theme to ({getTheme(theme).type})</button>*/}
			<Suspense fallback={<Fallback />}>
				<StyledLayout>{children}</StyledLayout>
			</Suspense>
		</ThemeProvider>
	);
}
