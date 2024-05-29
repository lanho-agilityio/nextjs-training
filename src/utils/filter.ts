import dayjs from 'dayjs';
// Constants
import { SEARCH_PARAMS, FILTER_TIME, FILTER_KEY } from '@/constants';

// Models
import { SearchParams } from '@/models';

export const generateSearchParams = (params: SearchParams): string => {
  const search = Object.keys(params).map((key) => {
    const value = params[key as keyof SearchParams];
    if (value) {
      if (key === FILTER_KEY.QUERY) {
        return SEARCH_PARAMS.QUERY(value);
      }
      if (key === FILTER_KEY.PAGE) {
        return SEARCH_PARAMS.PAGE(value);
      }
      if (key === FILTER_KEY.TAG) {
        return generateCategoryParams(decodeURIComponent(value).split(','));
      }
      if (key === FILTER_KEY.TIME) {
        return generateDateParams(value as FILTER_TIME);
      }
      if (key === FILTER_KEY.AUTHOR_ID) {
        return SEARCH_PARAMS.AUTHOR_ID(value);
      }
    }
  });
  return search.join('');
};

export const generateCategoryParams = (tags: string[]): string => {
  return tags.map((value) => SEARCH_PARAMS.TAG(value)).join('');
};

export const generateDateParams = (value: FILTER_TIME): string => {
  let startDate = '';
  let endDate = '';
  let previous;
  if (value === FILTER_TIME.ALL_TIME) {
    return '';
  } else if (value === FILTER_TIME.TODAY) {
    previous = new Date();
  } else {
    const date = new Date();
    previous = new Date(date.getTime());
    previous.setDate(date.getDate() - (value === FILTER_TIME.LAST_7_DAYS ? 7 : 30));
  }
  startDate = dayjs(previous).startOf('day').toISOString();
  endDate = dayjs(new Date()).toISOString();
  return SEARCH_PARAMS.TIME(startDate, endDate);
};
