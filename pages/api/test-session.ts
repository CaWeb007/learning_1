import {getSession} from "next-auth/client";

const handler = async ({req, res}) => {
    const session = await getSession({req})
    if (session){
        res.status(200).json({message: 'well done'})
    }else{
        res.status(401).json({error: 'No access', session})
    }
}
export default handler