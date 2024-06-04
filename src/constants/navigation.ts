import { Navigation } from '@/models';

export const ROUTES = {
  ABOUT: '/about',
  AUTHOR: (id: string) => `/author/${id}`,
  HOME: '/',
  CATEGORY: (tag: string) => `/category/${tag}`,
  ARCHIVE: '/posts/archive',
  UPSERT_POST: (id: string = '') => `/posts/upsert?id=${id}`,
  UPSERT_POST_BASE: '/posts/upsert',
  POST_DETAIL: (id: string) => `/posts/${id}`,
  SIGN_UP: '/sign-up',
};

export const NAVIGATION_LIST: Navigation[] = [
  {
    to: ROUTES.HOME,
    title: 'Home',
  },
  {
    to: ROUTES.ARCHIVE,
    title: 'Archive',
  },
  {
    to: ROUTES.ABOUT,
    title: 'About',
  },
];
