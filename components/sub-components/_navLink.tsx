/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { FC } from "react";
import { useRouter } from "next/router";
import { Context } from "@components/Context";
import { useContext, useEffect } from "react";

export const links: {
	route: string;
	routeName: string;
}[] = [
	{
		route: "/",
		routeName: "Home",
	},
	{
		route: "/about",
		routeName: "About Me",
	},
	{
		route: "/services",
		routeName: "Services",
	},
	{
		route: "/showcase",
		routeName: "Showcase",
	},
];

const NavLinks: FC = () => {
	const router = useRouter().route;
	const { navIsActive, setNavIsActive } = useContext(Context);

	useEffect(() => {
		setNavIsActive(() => {
			if (navIsActive) {
				return !navIsActive;
			}
			return navIsActive;
		});
	}, [router]);

	return (
		<nav
			className={`absolute transition-transform ease-in-out duration-500 top-full z-50 w-full left-0 bg-white border-t drop-shadow-xl border-b border-slate-200 p-4 lg:static lg:p-0 lg:bg-transparent lg:w-auto lg:border-none lg:drop-shadow-none lg:scale-100 ${
				navIsActive ? "scale-100" : "scale-0"
			}`}
		>
			<ul className="flex lg:items-center flex-col gap-4 lg:flex-row lg:gap-8">
				{links.map((link, index: number) => (
					<li key={index}>
						<Link href={link.route}>
							<a
								className={`block hover:text-indigo-700 transition-colors duration-500 ${
									router === link.route
										? "text-indigo-700"
										: "text-slate-900"
								}`}
							>
								{`${router === link.route
									? "<"
									: ""
								}
                                	${link.routeName}
									${router === link.route
										? "/>"
										: ""
								}`}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavLinks;
