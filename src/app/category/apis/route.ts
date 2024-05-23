// Constants
import { API_BASE_URL, API_ROUTES, VALIDATE_TAGS } from '@/constants';

export async function GET() {
  const response = await fetch(`${API_BASE_URL}${API_ROUTES.TAGS}`, {
    method: 'GET',
    next: {
      tags: [VALIDATE_TAGS.TAGS],

      revalidate: 60,
    },
  }).catch((error) => {
    throw new Error(error);
  });

  const data = await response.json();

  return Response.json({ data: data, total: response.headers.get('x-total-count') });
}
