import dbConnect from "utils/dbConnect";
import Comments from "models/Comments";

export default async function handler(req, res){
    const {method} = req

    await dbConnect()

    if (method === 'GET'){
        try{
            const comments = await Comments.find()
            res.status(200).json(comments)
        }catch (e){
            res.status(500).json(e)
        }
    }
    if (method === 'POST') {
        const newComment = {
            text: req.body.comment
        }
        try{
            const comment = await Comments.create(newComment)
            res.status(200).json(comment)
        }catch (e){
            res.status(500).json(e)
        }
    }
}