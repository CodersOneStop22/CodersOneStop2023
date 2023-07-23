import NextAuth from "next-auth/next";
import FacebookProvider from "next-auth/providers/facebook"
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import {connectToDatabase} from '../../../database/db'
import {verifyPassword} from '../../../database/auth'

export default NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
      }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@com.com" },
                password: { label: "Password", type: "password" },
                
            },
            async authorize(credentials) {
              
              console.log(credentials.email);

                const client = await connectToDatabase();

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();
        return { email: user.email };
        
            },
        }),  
    ],
    secret: process.env.SECRET,
    callbacks: {
      
      async credentials( user) {
        return true
      },
      
    }
}
);
