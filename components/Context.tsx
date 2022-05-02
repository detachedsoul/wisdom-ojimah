import { createContext, Dispatch, SetStateAction } from "react";

type contextType = {
	navIsActive: boolean;
	setNavIsActive: Dispatch<SetStateAction<boolean>>;
};

export const Context = createContext<contextType>({
    navIsActive: false,
    setNavIsActive: () => {}
});