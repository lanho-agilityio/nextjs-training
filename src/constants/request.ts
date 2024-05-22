export const API_BASE_URL = 'http://localhost:8000';

export const API_ROUTES = {
  USER: '/users',
  POSTS: '/posts',
  TAGS: '/tags',
};

export const VALIDATE_TAGS = {
  POSTS: 'posts',
  TAGS: 'tags',
};

export const SORTED = '&_sort=updatedAt&_order=desc';
export const USER_INCLUDED = '&_expand=user';

export const SEARCH_PARAMS = {
  QUERY: (query: string) => `&q=${query}`,
  TIME: (startDate: string, endDate: string) => `&updatedAt_gte=${startDate}&updatedAt_lte=${endDate}`,
  TAG: (tag: string) => `&tag.value=${tag}`,
  PAGE: (pageNumber: string) => `&_page=${pageNumber}`,
};
