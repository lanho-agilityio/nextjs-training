import { TransactionTime } from '@/models';

export enum FILTER_TIME {
  LAST_7_DAYS = '7d',
  LAST_30_DAYS = '30d',
  LAST_MONTH = '1m',
  LAST_3_MONTH = '3m',
  LAST_6_MONTH = '6m',
  ALL_TIME = 'all',
}

export const TRANSACTION_FILTER_TIME: TransactionTime = {
  [FILTER_TIME.ALL_TIME]: {
    label: 'All Time',
    value: FILTER_TIME.ALL_TIME,
  },
  [FILTER_TIME.LAST_MONTH]: {
    label: 'Last Month',
    value: FILTER_TIME.LAST_MONTH,
  },
  [FILTER_TIME.LAST_3_MONTH]: {
    label: 'Last 3 Months',
    value: FILTER_TIME.LAST_3_MONTH,
  },
  [FILTER_TIME.LAST_6_MONTH]: {
    label: 'Last 6 Months',
    value: FILTER_TIME.LAST_6_MONTH,
  },
  [FILTER_TIME.LAST_30_DAYS]: {
    label: 'Last 30 Days',
    value: FILTER_TIME.LAST_30_DAYS,
  },
  [FILTER_TIME.LAST_7_DAYS]: {
    label: 'Last 7 Days',
    value: FILTER_TIME.LAST_7_DAYS,
  },
};
