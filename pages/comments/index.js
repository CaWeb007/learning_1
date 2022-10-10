import {useState} from "react";

const CommentsList = () => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const [updatedComment, setUpdatedComment] = useState([])
    async function showCommentsList(){
        const res = await fetch('/api/comments')
        const data = await res.json()
        setComments(data)
        setComment('')
        setUpdatedComment([])
    }

    const sendComment = async () => {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        showCommentsList()
    }

    async function deleteComment(commentId) {
        await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        })
        showCommentsList()
    }
    const updateComment = async (commentId) => {
        await fetch(`/api/comments/${commentId}`, {
            method: 'POST',
            body: JSON.stringify({comment: updatedComment[commentId]}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        showCommentsList()
    }
    const onChangeUpdateInput = (e) => {
        const newState = updatedComment
        newState[parseInt(e.target.id)] = e.target.value
        setUpdatedComment(newState)
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
                        {item.text}({item.id})
                        <button onClick={() => deleteComment(item.id)}>Delete</button>
                        <input type="text" id={item.id} value={updatedComment[item.id]} onChange={onChangeUpdateInput}/>
                        <button onClick={() => updateComment(item.id)}>Update</button>
                    </div>
                )
            })}
        </div>
    </>)
}
export default CommentsList