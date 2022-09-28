const Post = ({post}) => {
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
    // let paths = []
    // data.map(post => {
    //     paths.push({params : {postId: String(post.id)}})
    // })
    const paths = data.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    return {
        props: {
            post: data
        }
    }
}