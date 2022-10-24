import dbConnect from "utils/dbConnect";
import Comments from "models/Comments";

export default async function handler(req, res){
    const {commentId} = req.query
    const {method} = req
    await dbConnect()
    try {
        let result = null
        if (method === 'GET'){
            result = await Comments.findById(commentId)
        }
        if(method === 'DELETE'){
            result = await Comments.deleteOne({_id: commentId})
        }
        if (method === 'POST'){
            result = await Comments.updateOne({_id: commentId}, {text: req.body.text})
        }
        if (result !== null)
            res.status(200).json(result)
    }catch (e) {
        console.log(e)
        res.status(500).json(e)
    }

}