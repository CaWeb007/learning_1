import {useState} from "react";

const CommentsList = () => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    async function showCommentsList(){
        const res = await fetch('/api/comments')
        const data = await res.json()
        setComments(data)
    }

    const sendComment = async () => {
        await fetch('/api/comments', {
            method: 'Post',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (<>
        <div>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button onClick={sendComment}>Send comment</button>
        </div>
        <div>
            <button onClick={showCommentsList}>Load comments</button>
        </div>
        <div>
            {comments.map(item => {
                return (
                    <div key={item.id}>
                        {item.text}
                    </div>
                )
            })}
        </div>
    </>)
}
export default CommentsList