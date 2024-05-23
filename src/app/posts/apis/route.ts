import { NextRequest } from 'next/server';

// Constants
import { API_BASE_URL, API_ROUTES, VALIDATE_TAGS } from '@/constants';

export async function GET(request: NextRequest) {
  const response = await fetch(`${API_BASE_URL}${API_ROUTES.POSTS}?${request.nextUrl.searchParams}`, {
    method: 'GET',
    next: {
      tags: [VALIDATE_TAGS.POSTS],

      revalidate: 60,
    },
  }).catch((error) => {
    throw new Error(error);
  });

  const data = await response.json();

  return Response.json(data);
}
