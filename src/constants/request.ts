export const API_BASE_URL = process.env.NEXT_PUBLIC_API_END_POINTS;

// Default
export const PER_PAGE = 8;
export const PER_PAGE_ARCHIVE = 9;

export const API_ROUTES = {
  USER: '/users',
  POSTS: '/posts',
  TAGS: '/tags',
};

export const VALIDATE_TAGS = {
  POSTS: 'posts',
  TAGS: 'tags',
  USERS: 'users',
};

export const SORTED = '&_sort=updatedAt&_order=desc';
export const USER_INCLUDED = '&_expand=user';
export const LIMIT = (perPage: number) => `&_limit=${perPage}`;

export const SEARCH_PARAMS = {
  QUERY: (query: string) => `&q=${query}`,
  TIME: (startDate: string, endDate: string) => `&updatedAt_gte=${startDate}&updatedAt_lte=${endDate}`,
  TAG: (tag: string) => `&tag.value=${tag}`,
  PAGE: (pageNumber: string) => `&_page=${pageNumber}`,
  AUTHOR_ID: (id: string) => `&userId=${id}`,
};
