import React, { EffectCallback, useEffect, useRef, useState } from "react";
import "./infinite-scroll.scss";
import Loader from "./Loader";

const OBSERVER_OPTIONS = {
	root: null,
	rootMargin: "20px",
	threshold: 1.0,
};

interface Props {
	onFirstLoad: EffectCallback;
	loadMore: EffectCallback;
	children: any;
}

export default function InfiniteScroll(props: Props) {
	const { children, loadMore, onFirstLoad } = props;
	const [offset, setOffset] = useState<number>(1); // tracking offset
	const loaderRef = useRef(null); //  load indicator ref

	//  handle what happens when reaching end of the list
	const onReachEnd = (entities) => {
		const target = entities[0];
		if (target.isIntersecting) setOffset((offset) => offset + 1);
	};

	useEffect(onFirstLoad, []); // first time getting the posts

	useEffect(loadMore, [offset]); // here we simulate adding new posts to List

	useEffect(() => {
		const observer = new IntersectionObserver(onReachEnd, OBSERVER_OPTIONS); // initialize IntersectionObserver
		if (loaderRef.current) observer.observe(loaderRef.current); // attaching observer to Load More
	}, []);

	return (
		<>
			{children}
			<Loader loader={loaderRef} />
		</>
	);
}
