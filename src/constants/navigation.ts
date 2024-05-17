import { Navigation } from '@/models';

export const ROUTES = {
  HOME: '/'
  POSTS: '/posts',
};

export const NAVIGATION_LIST: Navigation[] = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/about',
    title: 'About',
  },
  {
    to: '/posts/create',
    title: 'Create',
  },
  {
    to: '/posts',
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
