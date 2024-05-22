import dayjs from 'dayjs';
// Constants
import { SEARCH_PARAMS, FILTER_TIME } from '@/constants';

// Models
import { SearchParams } from '@/models';

export const generateSearchParams = (params: SearchParams): string => {
  const search = Object.keys(params).map((key) => {
    const value = params[key as keyof SearchParams];
    if (value && key === 'query') {
      return SEARCH_PARAMS.QUERY(value);
    }
    if (value && key === 'page') {
      return SEARCH_PARAMS.PAGE(value);
    }
    if (value && key === 'tag') {
      return generateTagParams(decodeURIComponent(value).split(','));
    }
    if (value && key === 'time') {
      return generateDateParams(value as FILTER_TIME)
    }
  });
  return search.join('');
};

export const generateTagParams = (tags: string[]): string => {
  return tags.map((value) => SEARCH_PARAMS.TAG(value)).join('');
};

export const generateDateParams = (value: FILTER_TIME): string => {
  let startDate = '';
  let endDate = '';
  let previous;
  if(value === FILTER_TIME.ALL_TIME){
    return ''
  }
  else{
    const date = new Date();
    previous = new Date(date.getTime())
    previous.setDate(date.getDate() - (value === FILTER_TIME.LAST_7_DAYS ? 7: 30));
  }
  startDate =  dayjs(previous).startOf('day').toISOString();
  endDate = dayjs(new Date()).toISOString()
  return SEARCH_PARAMS.TIME(startDate, endDate)
};
