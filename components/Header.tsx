import { Context } from "@components/Context";
import Link from "next/link";
import { FC, useState } from "react";
import NavLinks from "./sub-components/_navLink";

const Header: FC = () => {
	const [navIsActive, setNavIsActive] = useState<boolean>(false);

    return (
		<>
			<Context.Provider value={{ navIsActive, setNavIsActive }}>
				<header className="sticky top-0 z-50 flex items-center gap-4 justify-between py-3 px-4 bg-white/50 backdrop-blur-lg lg:px-[10%]">
					<Link href="/">
						<a className="font-baloo font-normal">
							<span className="font-pacifico font-bold text-indigo-700 relative top-0.5 pr-1">W</span>isdom
							Ojimah{" "}
							<span className="text-indigo-700 font-pacifico -ml-1">&bull;</span>
						</a>
					</Link>

					<NavLinks />

					<Link href="/contact">
						<a className="btn bg-indigo-700 text-white hover:bg-indigo-900 transition-colors duration-500 ease-in-out hidden lg:block">
							Let's Talk!
						</a>
					</Link>

					<button
						className="text-xl lg:hidden"
						type="button"
						aria-label="Navigation toggle button"
						onClick={() => setNavIsActive(() => !navIsActive)}
					>
						<i className="fi fi-rr-grid"></i>
					</button>
				</header>
			</Context.Provider>
		</>
	);
}

export default Header;