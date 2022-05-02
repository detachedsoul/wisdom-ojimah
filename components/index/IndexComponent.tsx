import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const IndexComponent: FC = () => {
	return (
		<section className="min-h-screen relative">
			{/* <span className="right-0 top-20 absolute -z-50">
				<span className="relative inline-block w-16 h-16 bg-indigo-500 rounded-full after:w-8 after:h-8 after:absolute after:top-1/4 after:left-1/4 after:bg-indigo-700 after:rounded-full"></span>
			</span>

			<span className="right-[50%] top-28 absolute -z-50">
				<span className="relative inline-block w-16 h-16 bg-green-200 rounded-full after:w-8 after:h-8 after:absolute after:top-1/4 after:left-1/4 after:bg-green-400 after:rounded-full"></span>
			</span>

			<span className="right-0 top-[calc(100%-12rem)] absolute -z-50">
				<span className="relative inline-block w-16 h-16 bg-rose-200 rounded-full after:w-8 after:h-8 after:absolute after:top-1/4 after:left-1/4 after:bg-rose-400 after:rounded-full"></span>
			</span>

			<span className="left-0 top-[calc(100%-15rem)] absolute -z-50">
				<span className="relative inline-block w-16 h-16 bg-rose-200 rounded-full after:w-8 after:h-8 after:absolute after:top-1/4 after:left-1/4 after:bg-rose-400 after:rounded-full"></span>
			</span> */}

			<div className="grid gap-8 items-center lg:grid-cols-12 lg:gap-3 mb-20">
				<div className="lg:col-span-6 order-2 lg:order-1 space-y-0.5 lg:space-y-2 text-center lg:text-left lg:-mt-[15vh] lg:pr-6">
					<span className="bg-indigo-700 text-white py-1 px-1.5 inline-block">
						Web Developer
					</span>
					<h1 className="text-3xl lg:text-4xl header text-indigo-700">
						Wisdom Ojimah
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo.
					</p>

					<Link href="/contact">
						<a className="text-indigo-700 font-bold underline-offset-4 underline hover:text-indigo-900 transition-colors duration-500 ease-in-out inline-block">
							Let's Chat!
						</a>
					</Link>
				</div>

				<div className="relative order-1 lg:order-2 rounded-lg w-full h-[300px] lg:h-screen lg:col-span-6">
					<Image
						className="rounded-lg"
						src="/img/index-bg.svg"
						layout="fill"
						alt="Homepage picture"
						quality={100}
					/>
				</div>
			</div>

			<div className="absolut flex gap-2 flex-wrap -mb-8  place-content-center lg:place-content-start">
				<span className="relative group inline-block w-auto">
					<span className="rounded-lg transition-transform scale-0 duration-500 group-hover:scale-100 bg-indigo-700 text-white py-0.5 -left-[40%] before:left-[10%] before:top-full before:absolute before:border-8 before:border-transparent before:border-t-indigo-700 -top-10 text-base px-2 inline-block absolute">
						vindicatedwisdom@gmail.com
					</span>

					<Link href="mailto:vindicatedwisdom@gmail.com">
						<a
							className="px-[0.55rem] pt-0.5 pb-1.5 rounded-full drop-shadow-lg shadow-lg bg-indigo-700 text-white transition-colors duration-500 hover:bg-indigo-900 inline-block hover:shadow-none hover:drop-shadow-none"
							target="_blank"
							rel="noreferrer noopener"
						>
							<i className="fi fi-rr-at"></i>
						</a>
					</Link>
				</span>

				<span className="relative group">
					<span className="rounded-lg transition-transform scale-0 duration-500 group-hover:scale-100 bg-indigo-700 text-white py-0.5 -left-[40%] before:left-[37%] before:top-full before:absolute before:border-8 before:border-transparent before:border-t-indigo-700 -top-10 text-base px-2 inline-block absolute">
						GitHub
					</span>

					<Link href="https://www.github.com/detachedsoul">
						<a
							className="px-[0.55rem] pt-0.5 pb-1.5 rounded-full drop-shadow-lg shadow-lg bg-indigo-700 text-white transition-colors duration-500 hover:bg-indigo-900 inline-block hover:shadow-none hover:drop-shadow-none"
							target="_blank"
							rel="noreferrer noopener"
						>
							<i className="fi fi-brands-github"></i>
						</a>
					</Link>
				</span>

				<span className="relative group">
					<span className="rounded-lg transition-transform scale-0 duration-500 group-hover:scale-100 bg-indigo-700 text-white py-0.5 -left-[55%] before:left-[40%] before:top-full before:absolute before:border-8 before:border-transparent before:border-t-indigo-700 -top-10 text-base px-2 inline-block absolute">
						LinkedIn
					</span>

					<Link href="https://www.linkedin.com/in/wisdom-ojimah/">
						<a
							className="px-[0.55rem] pt-0.5 pb-1.5 rounded-full drop-shadow-lg shadow-lg bg-indigo-700 text-white transition-colors duration-500 hover:bg-indigo-900 inline-block hover:shadow-none hover:drop-shadow-none"
							target="_blank"
							rel="noreferrer noopener"
						>
							<i className="fi fi-brands-linkedin"></i>
						</a>
					</Link>
				</span>
			</div>
		</section>
	);
};

export default IndexComponent;
