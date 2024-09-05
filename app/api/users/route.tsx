import { NextResponse } from 'next/server';
import pool from '../../../libs/db';

// GET 요청 처리
export async function GET() {
    try {
        //const result = await pool.query( 'SELECT NOW()' );
        const client = await pool.connect();
        const result = await client.query('SELECT NOW()');
        return NextResponse.json( result.rows, { status: 200 } );
    } catch (error) {
        return NextResponse.json( { error: error }, { status: 500 } );
    }
}
  
// POST 요청 처리
export async function POST(req: Request) {
    const { name, email } = await req.json();
    try {
        const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        return NextResponse.json(result.rows[0], { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Database insertion failed' }, { status: 500 });
    }
}