import { FILTER_TIME } from '@/constants';

export type PostTime = {
  [key in FILTER_TIME]: {
    label: string;
    value: FILTER_TIME;
  };
};

export type SearchParams = {
  query?: string;
  tag?: string;
  time?: string;
  page?: string;
  authorId?: string;
};
