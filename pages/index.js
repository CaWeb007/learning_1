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
            <Link href={'/blog'}><a>Blog</a></Link><br/>
            <Link href={'/product'}><a>Product</a></Link><br/>
            <Link href={'/users'}><a>Users</a></Link><br/>
            <Link href={'/posts'}><a>Posts</a></Link><br/>
            <Link href={'/news'}><a>News</a></Link><br/>
            <Link href={'/profile'}><a>Profile</a></Link><br/>
            <Link href={'/events'}><a>Events</a></Link><br/>
            <Link href={'/comments'}><a>Comments</a></Link><br/>
            <button className={'btn btn-primary'} onClick={handleClick}>
                Place Order
            </button>
        </div>
    )
}

export default Home