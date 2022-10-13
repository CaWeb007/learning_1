import {useRouter} from "next/router";

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