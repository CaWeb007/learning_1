import {useRouter} from "next/router";
import {getSession} from "next-auth/client";
import Footer from "../../components/footer";
import About from "../about";

function Blog() {
    const router = useRouter()
    function testRedirect() {
        router.push("/blog/first")
    }
    return (
        <>
            <h1>Blog page</h1><br/>
            <button className='btn btn-success' onClick={testRedirect}>Go to '/blog/first'</button>
        </>
    )
}
export default Blog

export async function getServerSideProps (context){
    const session = await getSession(context)
    return {
        props: {
            session
        }
    }
}
