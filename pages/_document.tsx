import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC = () => {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Pacifico&family=Quicksand:wght@500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="bg-white text-lg font-medium font-baloo antialiased selection:bg-indigo-700 selection:text-white leading-normal">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
