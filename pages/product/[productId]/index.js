import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";

const Product = ({product}) => {
    const router = useRouter()
    if (router.isFallback){
        return <h2>Loading...</h2>
    }
    return (
        <>
            <Head>
                <title>{product.title}</title>
            </Head>
            <div className="image" style={{position: "relative", width: 600, height: 300}}>
                <Image src={product.img} layout='fill'/>
            </div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <strong>{product.price}</strong>
        </>
    )
};

export default Product;
export async function getStaticPaths() {
    return {
        paths: [{params: {productId: '1'}}],
        fallback: true
    }
}
export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`http://localhost:4000/product/${params.productId}`)
    const data = await response.json()
    console.log(`Revalidation product ${params.productId}`)
    return {
        props: {
            product: data
        },
        revalidate: 20
    }
}