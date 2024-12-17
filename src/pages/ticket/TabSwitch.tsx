import { TabButton, TabContainer } from "components/base/TicketCard/styles";
import { SelectedTicketTab } from "./MyTickets";

interface Props {
	selectedTab: SelectedTicketTab;
	setSelectedTab: Function;
}

export default function TabSwitch(props: Props): JSX.Element {
	const { selectedTab, setSelectedTab } = props;

	return (
		<TabContainer>
			<TabButton isActive={selectedTab === "active"} onClick={() => setSelectedTab("active")}>
				فعال
			</TabButton>
			<TabButton
				isActive={selectedTab === "non-active"}
				onClick={() => setSelectedTab("non-active")}
			>
				غیرفعال
			</TabButton>
		</TabContainer>
	);
}
