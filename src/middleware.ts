import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAuth } from './helpers/auth';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || '';

  const verfiedToken =
    token &&
    (await verifyAuth(token).catch((err: any) => {
      console.log(err);
    }));
  console.log(verfiedToken);
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === '/login' || path === '/signup' || path === '/verifyemail';

  if (isPublicPath && verfiedToken) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

  if (!isPublicPath && !verfiedToken) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
  if (path === '/' && verfiedToken) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/dashboard/:path*', '/login', '/signup', '/verifyemail'],
};
