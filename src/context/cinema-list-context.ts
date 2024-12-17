import { Context, createContext } from "react";
import { SharedItemsType } from "types/models/cinema-list";

const CinemaListContext: Context<SharedItemsType | undefined> = createContext(undefined);

export default CinemaListContext;
