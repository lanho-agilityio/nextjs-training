import { Navigation } from '@/models';

export const ROUTES = {
  ABOUT: '/about',
  CREATE: '/posts/create',
  HOME: '/',
  POSTS: '/posts',
  POST_DETAIL: (id: string) => `/posts/${id}`,
  VERSION: '/version',
  SIGN_UP: '/sign-up',
};

export const NAVIGATION_LIST: Navigation[] = [
  {
    to: ROUTES.HOME,
    title: 'Home',
  },
  {
    to: ROUTES.ABOUT,
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
    to: ROUTES.VERSION,
    title: 'Version',
  },
];
