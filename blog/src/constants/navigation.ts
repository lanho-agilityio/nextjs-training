import { Navigation } from '@/Ttypes/nav';

export const NAVIGATION_LIST: Navigation[] = [
  {
    to: '/',
    title: 'Home',
    validation: false
  },
  {
    to: '/search',
    title: 'Search',
    validation: false
  },
  {
    to: '/upsert/add',
    title: 'Add',
    validation: true
  },

  {
    to: '/user/login',
    title: 'Login',
    validation: false
  }
];
