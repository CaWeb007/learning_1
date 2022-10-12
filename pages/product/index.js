import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {useRouter} from "next/router";

const ProductList = ({products, preview, name}) => {
    const pageTitle = 'ProductList'
    const router = useRouter()
    const previewModeButtonClick = (e) => {
        const id = e.target.id
        if (id === 'enable_preview_mode')
            router.push(`/api/preview?redirect=/${e.target.value}&disable=false`)
        if (id === 'disable_preview_mode')
            router.push(`/api/preview?redirect=/${e.target.value}&disable=true`)
    }
    let previewButton = null
    if (!preview)
        previewButton = <button id='enable_preview_mode' value="product" onClick={previewModeButtonClick}>Enable preview mode</button>
    else
        previewButton = <button id='disable_preview_mode' value="product" onClick={previewModeButtonClick}>Disable preview mode</button>
    return(
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>

            <h1>{pageTitle}</h1>
            {previewButton}
            <br/><br/>
            {name?(
                <div>Welcome {name}</div>
            ): (<div></div>)}
            <div className="productWrapper">
                {products.map(item => {
                    return(
                        <div key={item.id} className="productItem">
                            <Image src={item.img} alt={item.title} height={100} width={150}/>
                            <h2><Link href={`/product/${item.id}`}><a>{item.title}</a></Link></h2>
                            <strong>{item.price}</strong>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </>
    )
};
export default ProductList;
export async function getStaticProps({preview, previewData}){
    if (!preview) preview = false
    let name = null
    if (previewData)
        name = previewData.name
    const response = await fetch('http://localhost:4000/product')
    const data = await response.json()
    return{
        props: {
            products: data,
            preview,
            name
        },
        revalidate: 30
    }
}