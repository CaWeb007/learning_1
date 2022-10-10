export default function handler(req,res){
    //http://localhost:3000/api/one/two
    const {params} = req.query
    res.status(200).json(params)
}