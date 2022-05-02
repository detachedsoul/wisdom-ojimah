import Footer from "@components/Footer";
import Header from "@components/Header";

const Layout: ({children}: any) => JSX.Element = ({children}: any) => {
    return (
        <>
            <Header />
                <main className="py-12 px-4 lg:px-[10%]">
                    {children}
                </main>
            <Footer />
        </>
    );
}

export default Layout;