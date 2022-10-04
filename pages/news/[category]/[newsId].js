import Link from "next/link";

const NewsItem = ({newsItem, category}) => {
    return (
        <>
            <div>
                <h2>{newsItem.title}</h2>
                <p>{newsItem.description}</p>
            </div>
            <i><Link href={`/../news/${category}`}><a>Back to category</a></Link></i>
        </>
    );
};

export default NewsItem

export async function getServerSideProps(context) {
    const {params} = context
    const response = await fetch(`http://localhost:4000/news/${params.newsId}`)
    const data = await response.json()
    return {
        props: {
            newsItem: data,
            category: params.category
        }
    }
}