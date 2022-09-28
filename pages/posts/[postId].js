import {useRouter} from "next/router";

const Post = ({post}) => {
    const router = useRouter()
    if (router.isFallback)
        return <h1>Loading...</h1>
    return (
        <>
            <h2>{post.id}: {post.title}</h2>
            <p>{post.body}</p>
        </>
    );
};

export default Post

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    /*const paths = data.map(post => {
        if (post.id > 3) return
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })*/
    let paths = [];
    for (let i = 0; i < data.length; i++){
        if (data[i].id > 3) break
        paths.push({
            params: {
                postId: String(data[i].id)
            }
        })
    }
    return {
        paths,
        fallback: true // false, true, 'blocking'
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    if (!data.id) return {
        notFound: true
    }
    console.log(`Generating post page ${params.postId}`)

    return {
        props: {
            post: data
        }
    }
}