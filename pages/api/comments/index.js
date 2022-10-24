import dbConnect from "utils/dbConnect";
import Comments from "models/Comments";
import Users from "models/Users";

export default async function handler(req, res){
    const {method} = req
    await dbConnect()
    const getComments = async () => {
        const comments = await Comments.find()
        let result = []
        for (let i = 0; i < comments.length; i++){
            result[i] = {
                user: await Users.findById(comments[i].user_id),
                text: comments[i].text,
                _id: comments[i]._id
            }
        }
        return result
    }
    try{
        if (method === 'GET'){
            let result = await getComments()
            console.log(result)
            res.status(200).json(result)
        }
        if (method === 'POST') {
            const comment = await Comments.create(req.body)
            res.status(200).json(comment)
        }
    }catch (e){
        res.status(500).json(e)
    }
}