import {useRouter} from "next/router";
import {getSession} from "next-auth/client";

const Doc = () => {
  const router = useRouter()
  const {params = []} = router.query
  if (params.length === 2){
    return (
        <h1>
          Viewing docs for feature {params[1]} and concept {params[2]}
        </h1>
    )
  }else if (params.length === 1){
    return (
        <h1>
          Viewing docs for feature {params[1]}
        </h1>
    )
  }
  return(
      <h1>Docs Home Page</h1>
  )
}
export default Doc

export async function getServerSideProps (context){
    const session = await getSession(context)
    if (!session)
        return {
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http://localhost:3000/comments',
                permanent: false
            }
        }
    return {
        props: {
            session
        }
    }
}