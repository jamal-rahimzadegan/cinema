import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "redux/reducers";
import { useCallAction, useForm, useNavigation } from "hooks";
import {
	getDefaultMobileNumber,
	showErrorMessage,
	handleTicketDataTable,
	validateString,
} from "utils";
import {
	DataTable,
	Input,
	NumericalInput,
	Page,
	Text,
	Section,
	StepBar,
	SubmitButton,
} from "components";

export default function TicketInfo() {
	const navigation = useNavigation();
	const callAction = useCallAction();
	const { ticketForm, selectedCinema, selectedFilm } = useSelector(
		(state: RootStateType) => state.reservation
	);

	const setReservationTicketForm = (ticketFormData) => {
		callAction("SET_RESERVATION_TICKET_FORM", { ticketFormData });
	};

	const getCinemaListInit = () => {
		callAction("FETCH_CINEMA_LIST_INIT");
	};

	const updateInputs = (e) => {
		const { name, value, type } = e.target;

		handleInputChange(name, value, {
			type: type === "tel" ? "number" : "alphabet",
			maxLength: type === "tel" ? 11 : 50,
		});
	};

	const onInputFocusHandler = () => {
		setTimeout(() => document.getElementsByClassName("page")[0].scrollTo(0, 10000), 200);
	};

	const ticketDataTable = handleTicketDataTable({ selectedFilm, selectedCinema });

	const validateInputs = () => {
		const { firstName, lastName, mobileNumber } = ticketFormData || {};
		let errMsg = "";

		if (firstName === "") errMsg = "لطفا نام را وارد نمایید";
		else if (firstName.length > 50 || lastName.length > 50) {
			errMsg = "مقدار ورودی نباید بیشتر از 50 کاراکتر باشد";
		} else if (lastName === "") errMsg = "لطفا نام خانوادگی را وارد نمایید";
		else if (mobileNumber === "") errMsg = "لطفا شماره همراه را وارد نمایید";
		else if (mobileNumber?.length !== 11) errMsg = "شماره همراه باید یازده رقمی باشد";
		else if (!validateString(mobileNumber, "phoneNumber")) {
			errMsg = "شماره همراه باید با صفر شروع شود";
		}

		return errMsg;
	};

	const submitHandler = () => {
		const error = validateInputs();
		if (error) showErrorMessage(error);
		else {
			// send form data to redux
			setReservationTicketForm(ticketFormData);
			navigation.push("/select-seat");
		}
	};

	const [ticketFormData, handleInputChange, handleInputClear, handleSubmit] = useForm(
		ticketForm,
		submitHandler
	);

	useEffect(() => {
		if (ticketForm.mobileNumber === "") {
			handleInputChange("mobileNumber", getDefaultMobileNumber());
		}

		getCinemaListInit();
	}, []);

	return (
		<>
			<Page pageTitle="اطلاعات خرید" className="pb-16">
				<StepBar step={1} />
				<Section>
					<DataTable title="خلاصه بلیت" data={ticketDataTable} />
					<Text align="right" size="large" className="mt-4 mb-2">
						مشخصات خریدار بلیت
					</Text>
					<NumericalInput
						max={10}
						updateValue={(value) => handleInputChange("seatCount", value)}
						value={ticketFormData.seatCount}
					/>
					<Input
						className="my-2"
						onFocus={onInputFocusHandler}
						id="first_name"
						name="firstName"
						title="نام"
						placeholder="نام"
						clearValue={() => handleInputClear("firstName")}
						value={ticketFormData.firstName}
						onChange={updateInputs}
						maxLength="50"
					/>
					<Input
						className="mb-2"
						id="last_name"
						title="نام خانوادگی"
						name="lastName"
						placeholder="نام خانوادگی"
						clearValue={() => handleInputClear("lastName")}
						value={ticketFormData.lastName}
						onChange={updateInputs}
						maxLength="50"
					/>
					<Input
						className="mb-2"
						id="phone_number"
						title="شماره موبایل"
						name="mobileNumber"
						placeholder="090123456789"
						value={ticketFormData.mobileNumber}
						clearValue={() => handleInputClear("mobileNumber")}
						type="tel"
						onChange={updateInputs}
					/>
				</Section>
			</Page>
			<SubmitButton
				testId="pick-seat-submit"
				type={validateInputs() && "disabled"}
				onClick={handleSubmit}
				fixed
			>
				انتخاب صندلی
			</SubmitButton>
		</>
	);
}
