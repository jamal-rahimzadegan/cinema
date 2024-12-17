import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Page, Text, SubmitButton, Teaser, Seperator } from "components";
import { useCallAction } from "hooks";
import { showErrorMessage } from "../../utils";

export default function FilmDetails() {
	const history = useHistory();
	const { state } = useLocation();
	const callAction = useCallAction();
	const film: FilmItem = state?.film || {};

	const goToCinemaList = async () => {
		callAction("FETCH_CINEMA_LIST_INIT");
		callAction("SET_RESERVATION_FILM", { filmData: film });
		history.push("/select-cinema/" + film.id);
	};

	const throwFakeErr = () => {
		showErrorMessage("fake error msg");
	};

	return (
		<Page pageTitle="اطلاعات فیلم">
			{!!film ? (
				<>
					<Teaser film={film} />
					<div className="p-2 my-20">
						<Text size="medium" align="right" isBold className="my-2">
							محصول: {film.release_date || "-"}
						</Text>
						<Text size="medium" align="right" isBold className="my-3">
							کارگردان: {film.director || "-"}
						</Text>
						<Seperator />
						<Text size="medium" align="right" isBold className="my-2">
							درباره فیلم
						</Text>
						<Text size="small" align="justify">
							{film?.about || "توضیحی وجود ندارد."}
						</Text>
					</div>
					<SubmitButton fixed testId="film-details-submit" onClick={goToCinemaList}>
						خرید بلیت
					</SubmitButton>
				</>
			) : (
				<Text align="center">خطا در دریافت اطلاعات فیلم </Text>
			)}
			{/*<button onClick={throwFakeErr}>throw fake errors</button>*/}
		</Page>
	);
}
