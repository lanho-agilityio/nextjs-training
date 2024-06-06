import { NextResponse, type NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('id');
  // If not authenticated -> go to homepage
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/posts/upsert/:path*'],
};
