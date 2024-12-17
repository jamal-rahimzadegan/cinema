import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "redux/reducers";
import { handleTicketDataTable } from "utils";
import { ls } from "tools";
import {
	DataTable,
	Page,
	Text,
	SeatLabelList,
	Section,
	SpriteIcon,
	SubmitButton,
	WhiteSpace,
} from "components";

export default function Result(props) {
	const { location, history } = props;
	const { paymentStatus } = location;

	const payResult = {
		success: paymentStatus === 0,
		fail: ![1201, 1001, 0].includes(paymentStatus),
		unknown: [1201, 1001].includes(paymentStatus),
	};

	const { ticketForm, selectedCinema, selectedFilm, selectedSeats } = useSelector(
		(state: RootStateType) => state.reservation
	);

	const ticketDataTable = handleTicketDataTable({ selectedFilm, selectedCinema });

	const generateStatusTitle = () => {
		if (payResult) return "خرید شما با موفقیت انجام شد";
		else return "خرید شما ناموفق بود";
	};

	const getTicketInfo = () => {
		let ticketId = ls.get("aTicketTicketId");
		console.log(`--- ticketId in getTicketInfo  ----> `, ticketId);
	};

	useEffect(getTicketInfo, []);

	return (
		<Fragment>
			<Page pageTitle="">
				<Section>
					<SpriteIcon
						name={"sprite"}
						iconName={payResult.success ? "successful-purchase" : "failed-purchase"}
					/>
					<Text color="pale">
						<Text color="pale">
							{" "}
							{ticketForm.firstName + " " + ticketForm.lastName + " عزیز "}
						</Text>
					</Text>
					<Text>{generateStatusTitle()}</Text>
					{payResult.unknown ? (
						<Text>
							نتیجه ی خرید بلیت شما نا مشخص شده است. لطفا به صفحه ی بلیت های من مراجعه
							کنید و در صورت عدم مشاهده ی بلیت ها با پشتیبانی تماس بگیرید.
						</Text>
					) : null}
					{/* success */}
					{payResult.success ? (
						<Fragment>
							<Text align={"right"} size={"large"}>
								شماره صندلی ها
							</Text>
							<WhiteSpace />
							<SeatLabelList seats={selectedSeats} />
							<WhiteSpace space={20} />
						</Fragment>
					) : null}
					<Text align={"right"} size={"large"}>
						جزییات بلیت
					</Text>
					<WhiteSpace />
					<DataTable data={ticketDataTable} />
					<WhiteSpace space={100} />
				</Section>
			</Page>
			{payResult.success ? (
				<SubmitButton onClick={() => history.push("/")} type="primary" fixed={true}>
					تایید
				</SubmitButton>
			) : payResult.fail ? (
				<SubmitButton onClick={() => props.history.push("/")} type="primary" fixed={true}>
					بازگشت
				</SubmitButton>
			) : (
				<SubmitButton
					onClick={() => props.history.push("/ticket-list")}
					type="primary"
					fixed={true}
				>
					بازگشت
				</SubmitButton>
			)}
		</Fragment>
	);
}
