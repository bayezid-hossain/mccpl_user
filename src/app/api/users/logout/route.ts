import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = NextResponse.json({
      message: 'Logout successful',
      success: true,
    });
    console.log(response.cookies.get('token'));

    response.cookies.set('token', '', { httpOnly: true, maxAge: -1 });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
