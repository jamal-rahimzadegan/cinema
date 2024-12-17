import React, { useEffect, useState } from "react";
import { Loading, Page } from "components";
import RenderTickets from "pages/ticket/RenderTickets";
import { useGetMyTickets } from "api";
import { httpClient } from "services";
import { useRetryApi } from "hooks";
import { popup } from "utils";
import "./TicketList.scss";
import TabSwitch from "./TabSwitch";

export type SelectedTicketTab = "active" | "non-active";

export default function MyTickets() {
	const { isFetching, data, error, refetch } = useGetMyTickets() || {};
	const [selectedTab, setSelectedTab] = useState<SelectedTicketTab>("active");
	const ticketList: any = data;

	useRetryApi(error, () => {
		popup.retry({
			message: "خطا در دریافت بلیت ها",
			onRetry: refetch,
		});
	});

	// TODO: move it to the issue ticket step
	useEffect(() => {
		httpClient.destroyQuery("FETCH_TICKET_LIST").then(() => refetch());
	}, []);

	return (
		<Page pageTitle="لیست بلیت ها">
			<div className="ticket_list">
				{isFetching ? (
					<Loading />
				) : (
					<>
						<TabSwitch setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
						{selectedTab === "active" && (
							<RenderTickets
								emptyMsg="بلیت فعالی وجود ندارد."
								tickets={ticketList?.active_tickets}
							/>
						)}
						{selectedTab === "non-active" && (
							<RenderTickets
								isActive={false}
								emptyMsg="بلیت غیر فعالی وجود ندارد."
								tickets={ticketList?.non_active_tickets}
							/>
						)}
					</>
				)}
			</div>
		</Page>
	);
}
