import React, { lazy, useCallback, useMemo, useState } from "react";
import { Page, SearchBar, Text } from "components";
import { useNavigation, useRetryApi } from "hooks";
import { useGetHomeFilms } from "api";
import { HomeContext } from "context";
import { ls } from "tools";
import { popup } from "utils";
import { StyledMyTicketBtn } from "./style";

const RenderFilmList = lazy(() => import("./lists/RenderFilmList"));

export default function Home(): JSX.Element {
	const {
		data = [],
		isFetching,
		error: getFilmErr,
		refetch: getHomeFilms,
	} = useGetHomeFilms() || {};

	const navigation = useNavigation();
	const [searchResult, setSearchResult] = useState<FilmItem[]>([]);
	const filmList = useMemo(() => data as FilmItem[], [data]);
	const memoizedSearchResult = useMemo(() => searchResult, [searchResult]);
	const hasFilm: boolean = useMemo(() => filmList?.length > 0, [filmList]);
	// TODO: refactor it
	// @ts-ignore
	const isSearching = !!document.getElementById("home-search-bar")?.value;

	// TODO: handle it using http or another way, because the localStorage will be cleared on exit (from the webview)
	const handlePickCityPopup = () => {
		if (ls.get("aTicketIsSelectedCity")) return;
		ls.set("aTicketIsSelectedCity", true);
		popup.info("", "لطفا از منو بالا سمت چپ شهر خود را انتخاب کنید");
	};

	const searchMovie = useCallback(
		(name: string) => {
			if (!name || !hasFilm) return setSearchResult(null);
			const result = filmList?.filter((film: FilmItem) => film.name.includes(name));
			setSearchResult(result?.length ? result : []);
		},
		[filmList]
	);

	const handleData = (): FilmItem[] => {
		if (isSearching) return searchResult;
		return memoizedSearchResult?.length ? memoizedSearchResult : filmList;
	};

	useRetryApi(getFilmErr, () => {
		popup.retry({
			title: "خطا در دریافت لیست فیلم ها",
			message: "لطفا دوباره تلاش کنید",
			onRetry: getHomeFilms,
		});
	});

	return (
		<HomeContext.Provider value={{ searchMovie, filmList }}>
			<Page className="home" pageTitle="بلیت سینما">
				<SearchBar />
				{/*-------My tickets---------------------------------------*/}
				<StyledMyTicketBtn
					className="rounded"
					data-testid="go-to-my-tickets"
					onClick={() => navigation.push("/my-tickets")}
				>
					<div className="flex place-items-center">
						<Text isBold size="small" className="mr-1">
							بلیت های من
						</Text>
					</div>
					<Text>❯</Text>
				</StyledMyTicketBtn>
				{/*-------Film list ---------------------------------------*/}
				<RenderFilmList data={handleData()} isLoading={isFetching} />
			</Page>
		</HomeContext.Provider>
	);
}
