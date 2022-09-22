import Link from "next/link";
import {useRouter} from "next/router";

function Home() {
    const router = useRouter()

    const handleClick = () => {
        console.log('placing your router')
        router.push('/product')
    }
    return (
        <div>
            <h1>Home page</h1>
            <Link href={'/blog'}><a>Blog</a></Link>
            <Link href={'/product'}><a>Product</a></Link>
            <Link href={'/users'}><a>Users</a></Link>
            <Link href={'/posts'}><a>Posts</a></Link>
            <button onClick={handleClick}>
                Place Order
            </button>
        </div>
    )
}

export default Home