import { Context, createContext } from "react";

type HomePage = {
	filmList?: FilmItem[];
	searchMovie?: (name: string) => void;
};

const HomeContext: Context<HomePage | undefined> = createContext(undefined);

export default HomeContext;
