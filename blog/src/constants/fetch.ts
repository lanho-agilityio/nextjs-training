export const REVALIDATE_DEFAULT_TIME = 60;
export const BASE_URL_API = 'http://localhost:8000';
export const API_ENDPOINTS = {
  TAGS: '/tags',
  POSTS: '/posts',
  USERS: '/users'
};

export const SORT = '&_sort=dateCreated&_order=asc';
export const INCLUDE_USER = '&_expand=user';
export const WITH_POSTS = '&_embed=posts';
