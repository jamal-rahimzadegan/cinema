import { useCallAction } from "hooks";
import { lazy, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { ls } from "tools";
import { getQueryParams, parseToken } from "utils";

const Home = lazy(() => import("pages/home/Home"));
const ChooseCity = lazy(() => import("pages/ChooseCity"));
const FilmDetails = lazy(() => import("pages/film/FilmDetails"));
const CinemaList = lazy(() => import("pages/cinema-list/CinemaList"));
const TicketInfo = lazy(() => import("pages/ticket/TicketInfo"));
const SelectSeat = lazy(() => import("pages/select-seat/SelectSeat"));
const TicketDetail = lazy(() => import("pages/ticket/TicketDetail"));
const ConfirmTicket = lazy(() => import("pages/confirm/ConfirmTicket"));
const Result = lazy(() => import("pages/result/Result"));
const MyTickets = lazy(() => import("pages/ticket/MyTickets"));

// how to navigate to the homepage from your local machine--> http://localhost:3000/app_ticket?token=someToken&platform=somePlatform

export default function Routes() {
	const callAction = useCallAction();
	const { search } = useLocation();
	const history = useHistory();

	const updateUserPlatform = () => {
		const { platform = "android" } = getQueryParams(search);
		callAction("SET_PLATFORM", { platformName: platform });
	};

	useEffect(updateUserPlatform, []);

	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/choose-city" component={ChooseCity} />
				<Route exact path="/film/:id" component={FilmDetails} />
				<Route exact path="/select-cinema/:id" component={CinemaList} />
				<Route exact path="/select-seat" component={SelectSeat} />
				<Route exact path="/ticket-info" component={TicketInfo} />
				<Route exact path="/confirm-ticket" component={ConfirmTicket} />
				<Route exact path="/result" component={Result} />
				<Route exact path="/my-tickets" component={MyTickets} />
				<Route exact path="/tickets/:id" component={TicketDetail} />
			</Switch>
		</>
	);
}
