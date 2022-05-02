import { FC, useRef, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { links } from "@components/sub-components/_navLink";

const Footer: FC = () => {
	const scrollToTop = () => {
        scrollTo({
            top: 0,
			left: 0,
            behavior: 'smooth'
        });
    };

	const toTopBtn = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const topBtn = toTopBtn.current;

        window.onscroll = () => {
            if (document.documentElement.scrollTop >= 200 || document.body.scrollTop >= 200) {
                topBtn!.classList.add('show-to-top-btn');
            } else {
                topBtn!.classList.remove('show-to-top-btn');
            }
        };

    }, []);

	return (
		<>
			<footer className="text-white">
				<div className="flex gap-8 justify-between flex-wrap bg-indigo-700 p-4 lg:py-8 lg:px-[10%]">
					<Link href="https://web.facebook.com/IamWisdomOjimah">
						<a className="font-baloo font-normal">
							<span className="font-pacifico font-bold text-white relative top-0.5 pr-1">W</span>isdom
							Ojimah{" "}
							<span className="text-white font-pacifico -ml-1">&bull;</span>
						</a>
					</Link>

					<ul className="flex flex-wrap items-center gap-y-0.5 gap-x-4 lg:gap-x-8">
						{links.map((link, index: number) => (
							<li key={index}>
								<Link href={link.route}>
									<a className="text-white hover:text-sky-400">
										{link.routeName}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="bg-indigo-900 p-4 items-center flex gap-8 justify-between flex-wrap lg:py-8 lg:px-[10%]">
					<div className="space-y-2">
						<h3 className="header text-xl">I'm social!</h3>

						<div className="flex flex-wrap gap-4 items-center">
							<Link href="https://web.facebook.com/IamWisdomOjimah">
								<a
									className="border border-slate-300 transition-colors ease-in-out duration-500 px-1.5 pb-1 pt-0.5 hover:bg-sky-500 hover:border-sky-500"
									title="Connect with me on Facebook"
									target="_blank"
									rel="noreferrer noopener"
								>
									<i className="fi fi-brands-facebook text-xl"></i>
								</a>
							</Link>

							<Link href="https://github.com/detachedsoul">
								<a
									className="border border-slate-300 transition-colors ease-in-out duration-500 px-1.5 pb-1 pt-0.5 hover:bg-sky-500 hover:border-sky-500"
									title="Checkout my GitHub account"
									target="_blank"
									rel="noreferrer noopener"
								>
									<i className="fi fi-brands-github text-xl"></i>
								</a>
							</Link>

							<Link href="https://wa.me/+2348105008304">
								<a
									className="border border-slate-300 transition-colors ease-in-out duration-500 px-1.5 pb-1 pt-0.5 hover:bg-sky-500 hover:border-sky-500"
									title="Connect with me on WhatsApp"
									target="_blank"
									rel="noreferrer noopener"
								>
									<i className="fi fi-brands-whatsapp text-xl"></i>
								</a>
							</Link>

							<Link href="https://www.linkedin.com/in/wisdom-ojimah/">
								<a
									className="border border-slate-300 transition-colors ease-in-out duration-500 px-1.5 pb-1 pt-0.5 hover:bg-sky-500 hover:border-sky-500"
									title="Connect with me on LinkedIn"
									target="_blank"
									rel="noreferrer noopener"
								>
									<i className="fi fi-brands-linkedin text-xl"></i>
								</a>
							</Link>
						</div>
					</div>

					<span>
						Created with all the{" "}
						<i className="fi fi-rr-heart text-rose-500"></i> in the
						world by{" "}
						<Link href="https://web.facebook.com/IamWisdomOjimah">
							<a
								className="text-sky-400 hover:underline hover:underline-offset-4 underline-sky-400"
								target="_blank"
								rel="noreferrer noopener"
							>
								Wisdom Ojimah
							</a>
						</Link>
					</span>
				</div>
			</footer>

			<button className="fixed bottom-4 right-0 [transform-origin:0_0] translate-x-full transition-all duration-500 ease-in-out bg-indigo-700 text-white rounded-md py-1.5 px-2.5" type="button" arial-label="Scroll to top button" title="Scroll to top" onClick={scrollToTop} ref={toTopBtn}>
				<i className="fr fi-rr-angle-up relative top-0.5"></i>
			</button>

			<Script src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js" strategy="lazyOnload" defer />
		</>
	);
};

export default Footer;
