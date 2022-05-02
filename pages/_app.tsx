import "@styles/globals.css";
import "/public/icons/uicons.min.css";
import "/public/icons/uicons-brands.min.css";
import type { AppProps } from "next/app";
import Layout from "@pages/_layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp
