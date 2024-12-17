import React, { Fragment } from "react";
import { List, TicketCard } from "components";

interface Props {
	tickets: Ticket[];
	emptyMsg: string;
	isActive?: boolean;
}

function RenderTickets(props: Props): JSX.Element {
	const { tickets = [], emptyMsg, isActive = true } = props;

	return (
		<List
			isLoading={false}
			data={tickets}
			emptyMsg={emptyMsg}
			isEmpty={!tickets?.length}
			visible
		>
			{tickets.map((item: Ticket, i) => (
				<Fragment key={item.movie_name + item.ticket_id + i}>
					<TicketCard isActive={isActive} ticketData={item} />
				</Fragment>
			))}
		</List>
	);
}

export default React.memo(RenderTickets);
