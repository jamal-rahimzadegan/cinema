import React from "react";
import { useHistory } from "react-router-dom";
import { Container, ReserveCode, RowText, TicketCount } from "./styles";

interface Props {
	ticketData: Ticket;
	isActive: boolean;
}

export default function TicketCard(props: Props) {
	const { isActive } = props;
	const history = useHistory();
	const {
		provider_ticket_id,
		cinema_name,
		movie_name,
		end_at,
		persian_date,
		salon_name,
		start_at,
		cinema_address,
		seats,
		movie_cover,
	} = props.ticketData || {};

	const ticketCount: number = seats.split("-")?.length ?? 0;

	return (
		<Container
			isActive={isActive}
			className="ticket-card"
			onClick={() => history.push(`/tickets/${props.ticketData.ticket_id}`, props.ticketData)}
		>
			<img alt="movie" src={movie_cover} />
			<div className="flex flex-col justify-between mr-2 h-full">
				<div className="flex items-center justify-between">
					<RowText size="medium">{movie_name}</RowText>
					<TicketCount size="small">{ticketCount} بلیت</TicketCount>
				</div>
				<RowText size="small">{persian_date}</RowText>
				<RowText size="small">
					{start_at} - {end_at}
				</RowText>
				<RowText size="small" numberOfLines={1}>
					{cinema_address}، {cinema_name}، {salon_name}
				</RowText>
				<ReserveCode>کد رزرو: {provider_ticket_id}</ReserveCode>
			</div>
		</Container>
	);
}
