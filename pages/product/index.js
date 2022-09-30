import Link from "next/link";

const ProductList = ({products}) => {
    return(
        <>
            <h1>Product List</h1>
            <br/>
            <div className="productWrapper">
                {products.map(item => {
                    return(
                        <div key={item.id} className="productItem">
                            <h2><Link href={`/product/${item.id}`}><a>{item.title}</a></Link></h2>
                        </div>
                    )
                })}
            </div>
        </>
    )
};
export default ProductList;
export async function getStaticProps(){
    const response = await fetch('http://localhost:4000/product')
    const data = await response.json()
    return{
        props: {
            products: data
        }
    }
}