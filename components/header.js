import Link from "next/link";
import {useRouter} from "next/router";
import logo from "../public/boots/boots1.jpg"
import Image from "next/image";

function Header() {
    const router = useRouter()

    const handleClick = () => {
        console.log('placing your router')
        router.push('/product')
    }
    return (
        <div>
            <div className="logo" style={{height: 100, width: 200, position: "relative"}}>
                <Image layout='fill' className={'test'} src={logo} placeholder='blur'/>
            </div>
            <Link href={'/blog'}><a>Blog</a></Link><br/>
            <Link href={'/product'}><a>Product</a></Link><br/>
            <Link href={'/users'}><a>Users</a></Link><br/>
            <Link href={'/posts'}><a>Posts</a></Link><br/>
            <Link href={'/news'}><a>News</a></Link><br/>
            <Link href={'/profile'}><a>Profile</a></Link><br/>
            <Link href={'/events'}><a>Events</a></Link><br/>
            <Link href={'/comments'}><a>Comments</a></Link><br/>
            <Link href={'/docs'}><a>Docs</a></Link><br/>
            <Link href={'/about'}><a>About</a></Link><br/>
            <button className={'btn btn-primary'} onClick={handleClick}>
                Place Order
            </button>
        </div>
    )
}

export default Header