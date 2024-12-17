import React from "react";
import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/browser";
import App from "./App";
import "./assets/styles/main.scss";
import { isDevelopment } from "./constant";

//--Initiate Sentry for reporting -----------------------------------------
!isDevelopment &&
	Sentry.init({
		dsn: process.env.REACT_APP_SENTRY_DSN, // DSN value from sentry dashboard (client keys) / get from responsible person
	});

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);
root.render(<App />);
