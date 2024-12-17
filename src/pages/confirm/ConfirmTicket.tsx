import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "redux/reducers";
import { useCallAction, useNavigation, useRetryApi } from "hooks";
import { handleTicketDataTable, putSeparator, showNumberLessThan10With0, popup } from "utils";
import createBaseDataTable from "./create-base-data-table";
import {
	ReservePayload,
	IssueTicketResponse,
	StartPaymentResponse,
} from "types/models/api/issue-ticket";
import {
	DataTable,
	MessageCard,
	Page,
	Text,
	StepBar,
	SubmitButton,
	WhiteSpace,
	Rules,
} from "components";

export default function ConfirmTicket() {
	const navigate = useNavigation();
	const COUNTER = 300;
	const INITIAL_PAYMENT_REMAIN_TIME = 10_000;
	const callAction = useCallAction();
	const pricePayload = useRef<any>(null);
	const isMounted = useRef<any>(null);
	const [isShowRules, setIsShowRules] = useState<boolean>(false);
	const [isRulesAccepted, setIsRulesAccepted] = useState<boolean>(true); // TODO: update it
	const [remainingTimeForPayment, setRemainingTimeForPayment] = useState(
		INITIAL_PAYMENT_REMAIN_TIME
	);
	const {
		reservation,
		reservation: { selectedCinema, selectedFilm, ticketForm },
		ui: { reserveTime },
		price: {
			data: priceData,
			fetching: priceFetching,
			error: priceError,
			errorMessage: priceErrorMessage,
			fetched: priceFetched,
		},
	} = useSelector((state: RootStateType) => state);
	const tailoredSelectedSeats = reservation.selectedSeats.map(
		({ row, number }) => `${row},${number}`
	);

	const blockId = +reservation?.selectedSeats?.[0]?.blockId || 0;

	const reserveAndGetPrice = (reservePayload: ReservePayload) => {
		callAction("RESERVE_AND_GET_PRICE", { ...reservePayload });
	};

	const ticketDataTable = handleTicketDataTable({ selectedCinema, selectedFilm });

	const userBaseDataTable = createBaseDataTable(ticketForm);

	const showCountDown = () => {
		if (remainingTimeForPayment === INITIAL_PAYMENT_REMAIN_TIME) return "";

		return ` (${
			showNumberLessThan10With0(Math.floor(remainingTimeForPayment / 60)) +
			":" +
			showNumberLessThan10With0(remainingTimeForPayment % 60)
		}) `;
	};

	const generateReservePayload = () => {
		// payload data for opCode=1006 and reserve
		pricePayload.current = {
			customer_mobile: ticketForm.mobileNumber,
			seats: tailoredSelectedSeats,
			block_id: blockId,
		};

		if (!priceData?.totalPrice) reserveAndGetPrice(pricePayload.current);
	};

	const refetchPrice = () => {
		if (!isRulesAccepted) return;

		reserveAndGetPrice(pricePayload.current);
		setRemainingTimeForPayment(INITIAL_PAYMENT_REMAIN_TIME);

		reserveAndGetPrice(pricePayload.current);
	};

	const paymentCallback = (payload: StartPaymentResponse) => {
		const isPaySuccess = +payload?.status_code === 0;
		// navigate to TicketDetails page (with reserve id from below)
		// remove this: session.set("aTicketReserveID");
		if (isPaySuccess) navigate.replace("/my-tickets");
		else {
			popup.ask({
				title: "خطا در پرداخت",
				message: "آیا مایل به ادامه هستید؟",
				acceptTitle: "بله",
				cancelTitle: "انصراف",
				onCancel: () => navigate.replace("/"),
			});
		}
	};

	const submitPayment = () => {
		const { total_price, reserve_id }: IssueTicketResponse = priceData || {};

		const signPayload = {
			customer_name: ticketForm.firstName,
			customer_family: ticketForm.lastName,
			customer_mobile: ticketForm.mobileNumber,
			reserve_id,
			amount: total_price,
			block_id: blockId,
			seats: tailoredSelectedSeats,
		};

		!!total_price &&
			callAction("ISSUE_TICKET", {
				signPayload,
				paymentCallback,
			});
	};

	useEffect(() => {
		isMounted.current = true;
		if (!priceFetching && !priceError && priceFetched) {
			const value = COUNTER - Math.ceil((new Date().getTime() - reserveTime) / 1000);
			if (value < 0) setRemainingTimeForPayment(0);
			else setTimeout(() => isMounted.current && setRemainingTimeForPayment(value), 1000);
		}

		return () => {
			isMounted.current = false;
		};
	}, [remainingTimeForPayment, priceFetching, priceError, reserveTime, priceFetched]);

	useEffect(generateReservePayload, []);

	useRetryApi(priceError, () => {
		popup.retry({
			title: "",
			message: priceErrorMessage || "خطایی رخ داده لطفا دوباره تلاش کنید",
			onRetry: refetchPrice,
		});
	});

	return (
		<div>
			<Page pageTitle="تایید نهایی" className="p-3">
				<StepBar step={4} />
				<div className="my-3">
					<DataTable title="خلاصه بلیت" className="my-3" data={ticketDataTable} />
					<DataTable
						title="مشخصات خریدار بلیت"
						className="my-3"
						data={userBaseDataTable}
					/>
					<MessageCard className="mt-3">
						<div className="flex place-items-center justify-between px-2 py-3">
							<Text size="small">مبلغ نهایی (با احتساب مالیات)</Text>
							<Text size="small" isBold>
								{priceData?.total_price
									? putSeparator(priceData.total_price) + " ریال"
									: "-"}
							</Text>
						</div>
					</MessageCard>
				</div>
				<Text align="right">
					⚠️ لغو و استرداد مبلغ خرید حداکثر تا دو ساعت پیش از اکران فیلم امکان‌پذیر است.
				</Text>
				<Text align="right">
					⚠️ تکمیل فرایند خرید به منزله پذیرش قوانین و مقررات سامانه توسط کاربر است.
				</Text>
				<WhiteSpace space={100} />
			</Page>
			<>
				{remainingTimeForPayment > 0 ? (
					<SubmitButton
						type={isRulesAccepted ? "primary" : "disabled"}
						onClick={isRulesAccepted && submitPayment}
						fixed
					>
						پرداخت {showCountDown()}
					</SubmitButton>
				) : (
					<SubmitButton
						type={isRulesAccepted ? "primary" : "disabled"}
						onClick={() => navigate.push("/select-seat")}
						fixed
					>
						رزرو مجدد صندلی
					</SubmitButton>
				)}
			</>
			<Rules isShow={isShowRules} close={setIsShowRules} />
		</div>
	);
}
