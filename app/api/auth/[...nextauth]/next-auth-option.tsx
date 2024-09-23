import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import pool from '@/app/lib/db';
import bcrypt from 'bcrypt';

export const authOptions : NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: 'Email', type: 'text' },
          password: {  label: 'Password', type: 'password' },
        },
        authorize: async ( credentials ) => {
  
          const { email, password } = credentials;
          console.log( email, password );
          
          // 사용자 인증 로직
          const result = await pool.query('SELECT * FROM Users WHERE email = $1', [email]);
          
          console.log( 'query result : ', result.rows );
  
          if ( result?.rows?.length === 0 ) {
            throw new Error( JSON.stringify( { message: 'Invalid email', email : true } ) );
            //return NextResponse.json( { message: 'Invalid email', email : true }, { status: 401 } );
          }
  
          const user = result.rows[0];
          const isValidPassword = bcrypt.compareSync( password, user.password_hash );
          console.log( 'pw valid check  : ', isValidPassword );
          
          if ( !isValidPassword ) {
            throw new Error( JSON.stringify( { message: 'Invalid password', password : true } ) );
            //return NextResponse.json({ message: 'Invalid password', password : true }, { status : 401 } );
          }
          
          console.log( 'user  : ', user );
          //const user = { id: "1", name: "John Doe", email: credentials.email };
          if (user) {
            return user;
          }
          return null;
        },
      }),
      // GoogleProvider({
      //     clientId: process.env.GOOGLE_ID,
      //     clientSecret:process.env.GOOGLE_SECRET,
  
      // })
    ],
    session: {
      strategy: "jwt",
    },
    pages: {
      signIn: '/',
    },
    callbacks: {
      async session( { session, user, token } ) {
        console.log('callbacks session : ', user );
        if ( user?.username ) {
          console.log( 'username : ', user.username );
          token.username = user.username;
        }
        if ( user?.role ) {
          console.log( 'role : ', user.role );
          token.role = user.role;
        }

        session.user.username = token.username;
        session.user.role = token.role;
        return session;
      },
      async jwt( { token, user } ) {
        console.log('callbacks jwt : ', user );
        if ( user?.username ) {
          token.username = user.username;
        }
        token.role = 1;
        return token;
      }
    },
};
  