import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextRequest, NextResponse } from 'next/server';
import pool from '../../lib/db';
import bcrypt from 'bcrypt';

export const authOptions : NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials, req : NextRequest ) => {
        // 사용자 인증 로직        
        const { email, password } = await req.json();        
        const result = await pool.query('SELECT * FROM Users WHERE email = $1', [email]);
        if ( result?.rows?.length === 0 ) {
            return NextResponse.json( { message: 'Invalid email', email : true }, { status: 401 } );
        }

        const user = result.rows[0];
        const isValidPassword = bcrypt.compareSync( password, user.password_hash );
        
        if ( !isValidPassword ) {
            return null;//NextResponse.json({ message: 'Invalid password', password : true }, { status : 401 } );
        }
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
