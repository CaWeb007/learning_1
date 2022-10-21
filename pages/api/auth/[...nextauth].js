import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_SECRET_KEY
        })
    ],
    database: "mongodb://localhost:27017/nextauthDB",
    session: {
        jwt: true
    },
    jwt: {
        secret: 'jfjfj'
    }
})
//http://localhost:3000/api/auth/signin
//http://localhost:3000/api/auth/signout
