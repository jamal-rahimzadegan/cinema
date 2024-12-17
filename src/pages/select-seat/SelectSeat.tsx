import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { popup } from "utils";
import { session } from "tools";
import { useGetSeats } from "api";
import { httpClient } from "services";
import { RootStateType } from "redux/reducers";
import { useCallAction, useNavigation, useRetryApi } from "hooks";
import { Loading, Page, Seperator, StepBar, SubmitButton, Text, Toaster } from "components";
import { SeatsContext } from "context";
import screen from "assets/img/curtain2.svg";
import reservableSeat from "assets/icon/seats/chair@3x.png";
import selectedSeat from "assets/icon/seats/chair_green@3x.png";
import { SEAT_STATUS } from "./constants";
import SeatGuide from "./SeatGuide";
import RenderSeats from "./RenderSeats";
import "./_seats.scss";

export default function SelectSeat() {
	const navigation = useNavigation();
	const callAction = useCallAction();
	const toastRef = useRef(null);
	const [selectedSeats, setSelectedSeats] = useState<any[]>([]);
	const {
		ticketForm: { seatCount },
		selectedCinema,
	} = useSelector((state: RootStateType) => state.reservation);
	const providerId = selectedCinema?.selectedSans?.provider_id;

	const {
		refetch: refetchChairs,
		error,
		data,
		isFetching,
	} = useGetSeats({
		samfaa_schedule_id: String(providerId),
		reserve_id: session.get("aTicketReserveID"),
	}) || {};

	const seatList = data || [];

	const shouldShowSeats = seatList.length && !isFetching && !error;

	const getInitialPrice = () => {
		callAction("FETCH_PRICE_INIT");
	};

	const setReservationSelectedSeats = (seats) => {
		callAction("SET_RESERVATION_SELECTED_SEATS", { selectedSeats: seats });
	};

	const handleSeatClick = (seat: SeatItem, blockId: string) => {
		const { onShowToaster } = toastRef.current;

		switch (seat.status) {
			case SEAT_STATUS.free:
				return manageSeatSelection(seat, blockId);
			case SEAT_STATUS.reserved:
				return onShowToaster("این صندلی رزرو شده است");
			case SEAT_STATUS.booked:
				return onShowToaster("این صندلی قابل رزرو نیست");
			default:
				return null;
		}
	};

	const manageSeatSelection = (seat: SeatItem, blockId: string) => {
		const isSeatExist = selectedSeats.some((item) => item.id === seat.id);

		if (isSeatExist) return deselectSeat(seat);

		// if seat is not selected already
		if (selectedSeats.length < seatCount) return selectSeat(seat, blockId);

		toastRef.current.onShowToaster(
			"تعداد صندلی های انتخاب شده نمی تواند بیشتر از تعداد بلیت باشد"
		);
	};

	const selectSeat = (seat: SeatItem, blockId: string) => {
		let tempSeats = [...selectedSeats];
		tempSeats.push({ ...seat, blockId });

		changeSeatImg(seat, "select");
		setSelectedSeats(tempSeats);
	};

	const deselectSeat = (seat: SeatItem) => {
		let tempSeats = selectedSeats.filter((item) => item.id !== seat.id);
		setSelectedSeats(tempSeats);

		changeSeatImg(seat, "deselect");
	};

	const changeSeatImg = (targetSeat: SeatItem, action: "select" | "deselect") => {
		const updatedImg = action === "deselect" ? reservableSeat : selectedSeat;

		seatList.forEach((row) => {
			return row.seats.forEach((seat) => {
				if (seat.id === targetSeat.id) seat.img = updatedImg;
			});
		});
	};

	const cancelSelections = () => setSelectedSeats([]);

	const submitSeats = () => {
		if (selectedSeats.length !== seatCount) {
			return toastRef.current.onShowToaster(
				"تعداد صندلی های انتخاب شده باید با تعداد بلیت برابر باشد"
			);
		}

		setReservationSelectedSeats(
			selectedSeats.map((item) => ({
				row: item.row,
				number: item.number,
				blockId: item.blockId,
			}))
		);

		getInitialPrice();

		navigation.push("/confirm-ticket");
	};

	const sharedData = {
		seatList,
		selectedSeats,
		handleSeatClick,
		seatCount,
		cancelSelection: cancelSelections,
	};

	useRetryApi(error, () => {
		const errMsg = httpClient.handleError(error, "get seats");

		if (errMsg) popup.error(errMsg, navigation.goBack);
		else {
			popup.retry({
				title: "خطا در دریافت لیست صندلی ها",
				message: "",
				onRetry: refetchChairs,
			});
		}
	});

	useEffect(() => {
		refetchChairs();
	}, [providerId]);

	return (
		<SeatsContext.Provider value={sharedData}>
			<Page pageTitle="انتخاب صندلی" className="pb-16">
				<StepBar step={2} />
				{shouldShowSeats ? (
					<div className="overflow-hidden">
						<div className="flex place-items-center justify-evenly my-3">
							<Text size="small">{selectedCinema?.name}</Text>
							<Text size="small">|</Text>
							<Text size="small">{selectedCinema?.date}</Text>
							<Text size="small">|</Text>
							<Text size="small">{selectedCinema?.selectedSans?.start_at}</Text>
						</div>
						<div className="seats">
							<SeatGuide />
							<Seperator className="my-2" />
							<Text color="dark" size={"medium"} className="my-3">
								صندلی مورد نظر را انتخاب کنید
							</Text>
							<Text color="dark" isBold size={"small"} className="mb-3">
								می توانید صفحه را برای انتخاب اسکرول کنید
							</Text>
							<img src={screen} alt="پرده نمایش" className="w-full" />
							<Text color="dark" isBold size="extraSmall" className="mt-2">
								پرده نمایش
							</Text>
							<RenderSeats />
						</div>
						<Toaster ref={toastRef} />
					</div>
				) : null}
				{isFetching ? <Loading /> : null}
				{error ? <Text align="center">خطا در دریافت لیست صندلی ها</Text> : null}
			</Page>
			<SubmitButton
				type={selectedSeats.length !== seatCount ? "disabled" : ""}
				fixed
				zIndexMoreThanActionSheet
				onClick={submitSeats}
			>
				ادامه
			</SubmitButton>
		</SeatsContext.Provider>
	);
}
