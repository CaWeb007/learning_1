import 'styles/globals.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "components/header"
import Footer from "components/footer"
import Head from "next/head";
import {Container} from "react-bootstrap";
import {Provider, session} from "next-auth/client";

function MyApp({ Component, pageProps }) {
    if (Component.getLayout)
        return Component.getLayout(<Component {...pageProps} />)
    //if (pageProps.session) console.log(pageProps.session)
    return (
        <Provider session={pageProps.session}>
            <Container>
                <Head>
                    <title>Default title</title>
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <Header/>
                {(pageProps.session === null) && ('test access')}
                {(pageProps.session || pageProps.session===undefined) && (<Component {...pageProps} />)}
                <Footer/>
            </Container>
        </Provider>
    )
}

export default MyApp
