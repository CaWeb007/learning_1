import {comments} from "data/comments";

export default function handler(req, res){
    if (req.method === 'GET'){
        res.status(200).json(comments)
    }else if (req.method === 'POST') {
        const newId = parseInt(comments[comments.length - 1].id) + 1
        const newComment = {
            id: newId,
            text: req.body.comment
        }
        comments.push(newComment)
        res.status(200).json(comments)
    }
}