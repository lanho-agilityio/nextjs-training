import { FILTER_TIME } from '@/constants';

export type TransactionTime = {
  [key in FILTER_TIME]: {
    label: string;
    value: FILTER_TIME;
  };
};
