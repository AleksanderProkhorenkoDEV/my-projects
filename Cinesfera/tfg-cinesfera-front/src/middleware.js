import { NextResponse } from 'next/server'
import { hasCookie} from 'cookies-next'
import { cookies } from 'next/headers'
export function middleware(request) {
    
    if(request.nextUrl.pathname === '/profile') {
        if(hasCookie('user_token', { cookies })){
            return NextResponse.next();
        }else{
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
    
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
        '/profile'
    ],
}