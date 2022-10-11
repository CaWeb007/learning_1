import '../styles/globals.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../components/header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
    if (Component.getLayout)
        return Component.getLayout(<Component {...pageProps} />)
  return (
    <>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </>
  )
}

export default MyApp
