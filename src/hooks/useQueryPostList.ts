import useSWR from 'swr';

// APIs
import { APIs } from '@/services';

// Constants
import { API_ROUTES, ERROR_MESSAGES, LIMIT, PER_PAGE, SORTED, USER_INCLUDED } from '@/constants';

// Models
import { Post, SearchParams } from '@/models';

// Utils
import { generateSearchParams } from '@/utils';

// Custom hook for fetching data
export function useQueryPostList(query?: SearchParams, validateTags?: string[], limit: number = PER_PAGE) {
  const searchParams = (query && generateSearchParams(query)) || '';
  const url = `${API_ROUTES.POSTS}?${SORTED}${USER_INCLUDED}${LIMIT(limit)}${searchParams}`;

  const { data, isLoading, error } = useSWR(
    url,
    async (url) => {
      const response = await APIs.get(url, validateTags).catch(() => {
        throw new Error(ERROR_MESSAGES.DEFAULT_API_ERROR);
      });
      const posts: Post[] = (await response.json()) || [];
      const total: number = Number(response?.headers.get('x-total-count')) || 0;
      return { posts, total };
    },
    {
      fallbackData: {
        posts: [],
        total: 0,
      },
    },
  );

  const errorMessage = error?.message || '';

  return { data, isLoading, error: errorMessage };
}
