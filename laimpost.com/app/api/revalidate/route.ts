import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { revalidateLimiter } from '../limiter';
import { API_ALLOWED_ORIGIN } from '@/app/config';

export const baseHeaders = {
  'Access-Control-Allow-Origin': API_ALLOWED_ORIGIN,
};

export async function GET(request: NextRequest) {
  if ((await revalidateLimiter.removeTokens(1)) < 0)
    return NextResponse.json(
      { error: 'Too many requests.' },
      { status: 429, headers: baseHeaders }
    );

  const tag = request.nextUrl.searchParams.get('t');
  if (!tag) return NextResponse.json({ error: 'Tag is required.' }, { status: 400 });

  revalidateTag(tag);

  return NextResponse.json(
    {
      revalidated: true,
      now: Date.now(),
    },
    {
      headers: {
        ...baseHeaders,
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}
