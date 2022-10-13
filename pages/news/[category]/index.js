import Link from "next/link";

const NewsCategoryItemList = ({news, category}) => {
    return (
        <>
            <h1>Articles for category: {category}</h1><br/>
            {news.map(item => {
                return (
                    <div key={item.id}>
                        <Link href={`/news/${item.category}/${item.id}`}>
                            <a><h2>{item.title}</h2></a>
                        </Link>
                    </div>
                )
            })}
            <br/>
            <i><Link href="/news"><a>Back to news</a></Link></i>
        </>
    );
};

export default NewsCategoryItemList

export async function getServerSideProps(context) {
    const {params} = context
    const response = await fetch(`http://localhost:4000/news/?category=${params.category}`)
    const data = await response.json()
    if(!data.length)
        return {
            notFound: true
        }
    return {
        props: {
            news: data,
            category: params.category
        }
    }
}