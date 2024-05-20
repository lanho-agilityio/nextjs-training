import { PostTime } from '@/models';

export enum FILTER_TIME {
  TODAY = 'today',
  LAST_7_DAYS = '7d',
  LAST_MONTH = '1m',
  ALL_TIME = 'all',
}

export const POST_FILTER_TIME: PostTime = {
  [FILTER_TIME.ALL_TIME]: {
    label: 'All Time',
    value: FILTER_TIME.ALL_TIME,
  },
  [FILTER_TIME.TODAY]: {
    label: 'Today',
    value: FILTER_TIME.TODAY,
  },
  [FILTER_TIME.LAST_7_DAYS]: {
    label: 'Last 7 Days',
    value: FILTER_TIME.LAST_7_DAYS,
  },
  [FILTER_TIME.LAST_MONTH]: {
    label: 'Last Month',
    value: FILTER_TIME.LAST_MONTH,
  },
};

export const FILTER_KEY = {
  QUERY: 'query',
  TAG: 'tag',
  TIME: 'time',
};
