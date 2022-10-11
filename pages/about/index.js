import Footer from "../../components/Footer";

function About() {
    return <h1>About page</h1>
}
export default About
About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer/>
        </>
    )
}