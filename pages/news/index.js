import Link from "next/link";

const NewsList = ({news, categoryList}) => {
    return (
        <>
            <h1>List of News</h1>
            <div>
                {
                    news.map(item => {
                        return (
                            <div key={item.id}>
                                <Link href={`/news/${item.category}/${item.id}`}>
                                    <a><h2>{item.title}</h2></a>
                                </Link>
                            </div>
                        )
                    })
                }
            </div><br/>
            <div>
                {categoryList.map(item => {
                    return(
                        <div key={item}>
                            <Link href={`/news/${item}`}><a>{item}</a></Link>
                        </div>
                    )
                })}
            </div>

        </>
    )
}
export default NewsList
export async function getServerSideProps({res, preview}) {
    let url = "http://localhost:4000/news"
    if (preview)
        url = "http://localhost:4000/events"
    res.setHeader('Set-Cookie', ["name=Pavel"])
    const response = await fetch(url)
    const data = await response.json()
    const categoryList = getCategoryList(data)
    return {
        props: {
            news: data,
            categoryList
        }
    }
}
function getCategoryList(news) {
    let res = [];
    news.map(item => {
        if (res.find(element => element === item.category) === undefined)
            res.push(item.category)
    })
    return res
}