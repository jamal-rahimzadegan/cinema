import { combineReducers } from "redux";
import metaReducer from "./meta";
import uiReducer from "./ui";
import commonReducer from "./common";
import filmReducer from "./film";
import cinemaReducer from "./cinema";
import reservationReducer from "./reservation";
import ticketReducer from "./ticket";
import chairsReducer from "./chairs";
import priceReducer from "./price";

const rootReducer = combineReducers({
	meta: metaReducer,
	ui: uiReducer,
	common: commonReducer,
	ticket: ticketReducer,
	film: filmReducer,
	cinema: cinemaReducer,
	reservation: reservationReducer,
	chairs: chairsReducer,
	price: priceReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
