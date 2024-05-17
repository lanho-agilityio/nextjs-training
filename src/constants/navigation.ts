import { Navigation } from '@/models';

export const ROUTES = {
  HOME: '/',
  POSTS: '/posts',
  CREATE: '/posts/create',
  POST_DETAIL: (id: string) => `/posts/${id}`,
};

export const NAVIGATION_LIST: Navigation[] = [
  {
    to: ROUTES.HOME,
    title: 'Home',
  },
  {
    to: '/about',
    title: 'About',
  },
  {
    to: ROUTES.CREATE,
    title: 'Create',
  },
  {
    to: ROUTES.POSTS,
    title: 'Archive',
  },
  {
    to: '/',
    title: 'Version',
  },
  {
    to: '/',
    title: 'Login',
  },
];
