import 'styles/globals.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "components/header"
import Footer from "components/footer"
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    if (Component.getLayout)
        return Component.getLayout(<Component {...pageProps} />)
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
