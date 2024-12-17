import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { configure } from "@testing-library/react";
import { store } from "redux/store";
import Layout from "../layout";
import { ls } from "tools";

// increases the timeout for async operations
configure({ asyncUtilTimeout: 5000 });

// default localStorage for testing
ls.setMultiple({
	aTciketUserCity: { name: "تهران", cityId: 5756 },
	token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoxNDQxOTMsImFwcF9pZCI6Mzg4NjAyMywiZXhwIjoxNjQxNjY2MTI5MCwiaG9zdF9pZCI6MzA4LCJqaXQiOiJlNTU2MzA3Zi1kZWMyLTQ0NzItODcyYi05YTE4NDdkMTc3ZDAiLCJtb2JpbGVfbm8iOiIwOTAxMTQxMjc1MyJ9.0esWE_hdKKkGH0dteIzUx7jUB4lGzASW4VpU-0LV5bc",
});

function GlobalWrapper({ children }) {
	return (
		<Provider store={store}>
			<Layout>
				<Router basename="/app_ticket">{children}</Router>
			</Layout>
		</Provider>
	);
}

export { GlobalWrapper };
