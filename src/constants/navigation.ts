import { Navigation } from '@/models';

export const ROUTES = {
  ABOUT: '/about',
  AUTHOR: (id: string) => `/author/${id}`,
  HOME: '/',
  CATEGORY: (tag: string) => `/category/${tag}`,
  POSTS: '/posts',
  CREATE: '/posts/create',
  EDIT_POST: (id: string) => `/posts/edit/${id}`,
  POST_DETAIL: (id: string) => `/posts/${id}`,
  SIGN_UP: '/sign-up',
};

export const NAVIGATION_LIST: Navigation[] = [
  {
    to: ROUTES.HOME,
    title: 'Home',
  },
  {
    to: ROUTES.POSTS,
    title: 'Archive',
  },
  {
    to: ROUTES.ABOUT,
    title: 'About',
  },
  {
    to: ROUTES.CREATE,
    title: 'Create',
  },
];
