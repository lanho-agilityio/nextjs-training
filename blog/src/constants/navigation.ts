import { Navigation } from '../types/nav';

export const NAVIGATION_LIST: Navigation[] = [
  {
    to: '/',
    title: 'Home',
    validation: false
  },
  
  {
    to: '/upsert/add',
    title: 'Add',
    validation: true
  },
  {
    to: '/search',
    title: 'Search',
    validation: false
  },
  {
    to: '/user/login',
    title: 'Login',
    validation: false
  },
  {
    to: '/user/register',
    title: 'Register',
    validation: false
  }
];
