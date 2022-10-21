import {useState} from "react";
import {getSession, useSession} from "next-auth/client";

const CommentsList = (/*{session}*/) => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const [updatedComment, setUpdatedComment] = useState([])
    const [session] = useSession()
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
        await showCommentsList()
    }

    async function deleteComment(commentId) {
        await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        })
        await showCommentsList()
    }
    const updateComment = async (commentId) => {
        await fetch(`/api/comments/${commentId}`, {
            method: 'POST',
            body: JSON.stringify({comment: updatedComment[commentId]}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await showCommentsList()
    }
    const onChangeUpdateInput = (e) => {
        const newState = updatedComment
        newState[e.target.id] = e.target.value
        setUpdatedComment(newState)
    }
    return (<>
        {session && (
            <div>
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
                <button onClick={sendComment}>Send comment</button>
            </div>
        )}

        <div>
            <button onClick={showCommentsList}>Load comments</button>
        </div>
        <div>
            {comments.map(item => {
                return (
                    <div key={item._id}>
                        {item.text}
                        {session && (
                            <>
                                <button onClick={() => deleteComment(item._id)}>Delete</button>
                                <input type="text" id={item._id} value={updatedComment[item._id]} onChange={onChangeUpdateInput}/>
                                <button onClick={() => updateComment(item._id)}>Update</button>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    </>)
}
export default CommentsList

export async function getServerSideProps (context){
    const session = await getSession(context)
    return {
        props: {
            session
        }
    }
}