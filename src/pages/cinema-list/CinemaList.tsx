import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Input, Page, Seperator, SpriteIcon, StepBar, SubmitButton } from "components";
import { useCallAction, useNavigation, useRetryApi } from "hooks";
import { validateString, popup } from "utils";
import { useGetCinemaList } from "api";
import { CinemaListContext } from "context";
import RenderCinemaList from "./RenderCinemaList";
import { CinemaState, SharedItemsType } from "types/models/cinema-list";
import { httpClient } from "services";

export default function CinemaList(props) {
	const { id: filmId } = props.match.params;
	const callAction = useCallAction();
	const navigation = useNavigation();
	const {
		status,
		data,
		refetch: refetchCinema,
		error,
		isFetching,
	} = useGetCinemaList(+filmId) || {};
	const cinemaList = data as CinemaItem[];
	const [cinemaStateData, setCinemaStateData] = useState<CinemaState>({
		selectedDay: "",
		selectedCinema: null,
		selectedSans: null,
		searchNameInput: "",
		searchCinemaResults: [],
	});

	const updateCinemaListData = () => {
		if (!cinemaList?.length) return;
		setCinemaStateData({ ...cinemaStateData, searchCinemaResults: cinemaList });
	};

	const searchCinema = (e) => {
		if (!cinemaList?.length) return;

		const { value: queryTxt } = e.target;
		const searchResult = (() => {
			if (!queryTxt.length) return cinemaList;

			return validateString(queryTxt, "perCharAndNum")
				? cinemaList.filter((item: CinemaItem) => item.name.includes(queryTxt))
				: [];
		})();

		setCinemaStateData({
			...cinemaStateData,
			searchCinemaResults: searchResult,
		});
	};

	const pickCinema = () => {
		callAction("PICK_CINEMA_FOR_RESERVE", {
			cinemaData: {
				...cinemaStateData.selectedCinema,
				selectedSans: cinemaStateData.selectedSans,
				date: cinemaStateData.selectedDay,
			},
		});
	};

	const canProceedToNextPage = (() => {
		return (
			cinemaStateData.selectedCinema &&
			cinemaStateData.selectedSans &&
			cinemaStateData.selectedDay
		);
	})();

	const cinemaListSharedContext: SharedItemsType = {
		state: useMemo(() => cinemaStateData, [cinemaStateData]),
		setState: useCallback(setCinemaStateData, []),
	};

	const submit = async () => {
		if (!cinemaStateData.selectedSans) return popup.error("لطفا سانس را انتخاب کنید");

		await httpClient.destroyQuery("FETCH_CINEMA_SEATS");
		pickCinema();
		navigation.push("/ticket-info");
	};

	useRetryApi(error, () => {
		popup.retry({
			title: "خطا در دریافت لیست سینماها",
			message: "لطفا دوباره تلاش کنید",
			onRetry: refetchCinema,
		});
	});

	useEffect(updateCinemaListData, [cinemaList]);

	return (
		<CinemaListContext.Provider value={cinemaListSharedContext}>
			<Page className="p-2" pageTitle="انتخاب سینما">
				<StepBar step={0} />
				{status === "success" ? (
					<>
						<Input
							placeholder="جستجوی سینما"
							onChange={searchCinema}
							Icon={() => <SpriteIcon name="sprite" iconName="search" />}
							clearValue={() =>
								setCinemaStateData({ ...cinemaStateData, searchNameInput: "" })
							}
						/>
						<Seperator className="my-4" />
					</>
				) : null}
				<RenderCinemaList
					status={isFetching ? "loading" : status}
					filmUid={filmId}
					cinemas={cinemaStateData.searchCinemaResults}
				/>
				<SubmitButton
					className="mt-5"
					testId="cinema-list-submit"
					type={canProceedToNextPage ? "primary" : "disabled"}
					fixed
					onClick={submit}
				>
					مرحله بعد
				</SubmitButton>
			</Page>
		</CinemaListContext.Provider>
	);
}
