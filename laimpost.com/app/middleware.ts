import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { API_ALLOWED_ORIGIN } from '@/app/config';

export function middleware(request: NextRequest) {
  if (API_ALLOWED_ORIGIN) {
    const origin = request.headers.get('origin');
    if (new RegExp('/api/*').test(request.url) && (!origin || origin !== API_ALLOWED_ORIGIN))
      return new NextResponse(null, {
        status: 403,
        statusText: 'Forbidden',
      });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
