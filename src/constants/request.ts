export const API_BASE_URL = 'http://localhost:8000';

export const API_ROUTES = {
  POSTS: '/posts',
};

export const VALIDATE_TAG = {
  POSTS: 'posts',
};

export const SORTED = '&_sort=dateCreated&_order=desc';
export const USER_INCLUDED = '&_expand=user';

export const PAGINATION_PARAMS = {
  PAGE: (pageNumber: number) => `&_page=${pageNumber}`,
};

export const SEARCH_PARAMS = {
  QUERY: (query: string) => `&_q=${query}`,
  START_DATE: (dateTime: string) => `&updatedAt_gte=${dateTime}`,
  END_DATE: (dateTime: string) => `&updatedAt_lte=${dateTime}`,
  TAG: (tag: string) => `&updatedAt_lte=${tag}`,
};
