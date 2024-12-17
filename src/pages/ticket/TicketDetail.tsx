import React, { useId } from "react";
import { useLocation } from "react-router-dom";
import { Page, Text, SpriteIcon } from "components";
import { session } from "tools";
import { copyClipboard } from "utils";
import { useGetTicketDetails } from "api";
import { ReactComponent as Copy } from "assets/icon/copy.svg";
import { ReserveCode } from "components/base/TicketCard/styles";
import { Container, Banner, Cover, InfoContainer, SeatNumberContainer } from "./styles";

type SeatInfo = {
	row: string;
	num: string;
};

/**
 * Ticket details flow:
 * if -> you have come from the ticket list do not call `useGetTicketDetails`
 * else -> you need to call it with reserveId that is saved in the reserve process
 *
 * in the end, remove the sessionStorage entry (related to the reserve id)
 */

export default function TicketDetail(): JSX.Element {
	const ticket: Ticket = useLocation().state;
	const id = useId();

	const { data: ticketData } = useGetTicketDetails(+session.get("aTicketReserveID"));
	console.log(`--- ticketData----> `, ticketData);

	const seats: SeatInfo[] = (() => {
		// 14,12 --> ردیف 14 شماره 12 --> the first is the row, the second is the seat number
		if (!ticket.seats) return [];

		const seatNumberList = ticket.seats.split("-");
		const splittedSeats = seatNumberList.map((item) => item.split(","));

		return splittedSeats.map((item) => ({
			row: item[0],
			num: item[1],
		}));
	})();

	return (
		<Page pageTitle="مشخصات بلیت">
			<Container>
				<Banner src={ticket.movie_banner} />
				<div className="p-3">
					<InfoContainer>
						<Cover src={ticket.movie_cover} />
						<div className="pb-3">
							<Text color="black" size="large" className="mb-3">
								{ticket.movie_name}
							</Text>
							<Text color="black">{ticket.director}</Text>
						</div>
					</InfoContainer>
					<hr />
					<InfoItem
						icon="date"
						content={`${ticket.persian_day} - ${ticket.persian_date}`}
					/>
					<InfoItem icon="time" content={`${ticket.start_at} - ${ticket.end_at}`} />
					<InfoItem icon="big-marker" content={ticket.cinema_name} />
					<InfoItem icon="" content={ticket.cinema_address} />
					<Text isBold size="large" color="black" className="mt-4 mb-1">
						شماره صندلی:
					</Text>
					<div className="flex flex-wrap">
						{seats.map((seatInfo) => (
							<SeatNumberContainer key={id + seatInfo.row + seatInfo.num}>
								{`ردیف ${seatInfo.row} - صندلی ${seatInfo.num}`}
							</SeatNumberContainer>
						))}
					</div>
					{ticket.provider_ticket_id && (
						<ReserveCode className="flex justify-between px-3 my-5">
							<Text color="#4BBBA3">کد رزور:</Text>
							<div
								className="flex items-center"
								onClick={() => copyClipboard(ticket.provider_ticket_id || "-")}
							>
								<Text className="ml-2" color="#4BBBA3">
									{ticket.provider_ticket_id || "-"}
								</Text>
								<Copy height={20} width={20} fill={"#4BBBA3"} />
							</div>
						</ReserveCode>
					)}
				</div>
			</Container>
		</Page>
	);
}

const InfoItem = ({ icon, content }) => (
	<div className="flex items-center my-2">
		<SpriteIcon className="p-0 m-0" name="sprite" iconName={icon} />
		<Text className="mr-2" color="black">
			{content}
		</Text>
	</div>
);
