import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_SECRET_KEY
        })
    ],
    database: process.env.MDB_URL,
    session: {
        jwt: true
    },
    jwt: {
        secret: 'jfjfj'
    },
    callbacks: {
        async jwt(token, user){
            if (user && user.hasOwnProperty('id')){
                token.id = user.id
            }
            return token
        },
        async session(session, token){
            if (token && token.hasOwnProperty('id'))
                session.user.id = token.id
            return session
        }

    }
})
//http://localhost:3000/api/auth/signin
//http://localhost:3000/api/auth/signout
