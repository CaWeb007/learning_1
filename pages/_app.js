import 'styles/globals.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "components/header"
import Footer from "components/footer"
import Head from "next/head";
import {Container} from "react-bootstrap";

function MyApp({ Component, pageProps }) {
    if (Component.getLayout)
        return Component.getLayout(<Component {...pageProps} />)
    return (
        <Container>
            <Head>
                <title>Default title</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </Container>
    )
}

export default MyApp
