import type { NextPage } from "next";
import Head from "next/head";
import IndexComponent from "@components/index/IndexComponent";

const Index: NextPage = () => {
	return (
		<>
			<Head>
				<title>Wisdom Ojimah | Web Developer</title>
				<meta
					name="description"
					content="Wisdom Ojimah's website's homepage"
				/>
			</Head>
			<IndexComponent />
		</>
	);
};

export default Index;
