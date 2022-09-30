import {useRouter} from "next/router";

const Product = ({product}) => {
    const router = useRouter()
    if (router.isFallback){
        return <h2>Loading...</h2>
    }
    return (
        <>
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
    return {
        props: {
            product: data
        }
    }
}