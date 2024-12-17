import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { reactQueryClient } from "constant";
import { apiConfig } from "constant/config";
import authService from "services/auth-service";
import { useComponentWillMount } from "hooks";
import { getQueryParams } from "utils";
import Routes from "./routes/Routes";
import { store } from "redux/store";
import Layout from "layout";
import { ls } from "tools";

export default function App() {
	const defineDefaultCity = () => {
		if (ls.get<CityType>("aTicketUserCity")?.name) return;
		else ls.set("aTicketUserCity", apiConfig.defaultCity);
	};

	// Tells PWA, that the webapp is loaded
	const runWebAppReady = () => {
		const { search } = window.location;
		const { platform = "android" } = getQueryParams(search);
		(window as any)?.appGlobal?.application?.beInformedWebAppIsReady(platform);
	};

	useComponentWillMount(() => {
		authService.storeToken();
		defineDefaultCity();
	});

	useEffect(runWebAppReady, []);

	return (
		<Provider store={store}>
			<QueryClientProvider client={reactQueryClient}>
				<Router basename="/app_ticket">
					<Layout>
						<Routes />
					</Layout>
				</Router>
			</QueryClientProvider>
		</Provider>
	);
}
