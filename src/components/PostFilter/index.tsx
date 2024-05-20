'use client';
import { ChangeEvent } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Grid, SelectChangeEvent } from '@mui/material';
import { useDebouncedCallback } from 'use-debounce';

// Constants
import { DEBOUNCE_TIME, FILTER_KEY, FILTER_TIME, MOCK_TAG_LIST, POST_FILTER_TIME } from '@/constants';

// Components
import SearchInput from '../SearchInput';
import DatePicker from '../DatePicker';
import TagSelect from '../TagSelect';

// Utils
import { isEmpty } from '@/utils';

export const PostFilter = (): JSX.Element => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const searchParamsByQuery = searchParams.get(FILTER_KEY.QUERY) || '';
  const searchParamsByTag = searchParams.get(FILTER_KEY.TAG) || [];
  const searchParamsByTime = searchParams.get(FILTER_KEY.TIME) || FILTER_TIME.ALL_TIME;

  const postFilterTime = Object.keys(POST_FILTER_TIME).map((key: string) => POST_FILTER_TIME[key as FILTER_TIME]);

  const postSelectOptions = [...MOCK_TAG_LIST];

  const generateSearchParams = useDebouncedCallback((queryKey: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (isEmpty(value)) {
      params.delete(queryKey);
    } else {
      params.set(queryKey, encodeURIComponent(value));
    }
    params.set(FILTER_KEY.PAGE, '1');
    replace(`${pathname}?${params.toString()}`);
  }, DEBOUNCE_TIME);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    generateSearchParams(FILTER_KEY.QUERY, event.target.value);
  };

  const handleClearSearchInput = () => {
    generateSearchParams(FILTER_KEY.QUERY, '');
  };

  const handleSelectTag = (value: string | string[]) => {
    const search = typeof value === 'string' ? value.split(',') : value;
    generateSearchParams(FILTER_KEY.TAG, search.join(','));
  };

  const handlSelectTime = (event: SelectChangeEvent) => {
    generateSearchParams(FILTER_KEY.TIME, event.target.value);
  };

  return (
    <Grid container sx={{ marginBottom: '40px' }} spacing={2}>
      <Grid item xs={12} md={6}>
        <SearchInput
          value={decodeURIComponent(searchParamsByQuery)}
          onChange={handleSearchInput}
          onClearSearchInput={handleClearSearchInput}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <TagSelect
          options={postSelectOptions}
          value={
            typeof searchParamsByTag === 'string' ? decodeURIComponent(searchParamsByTag).split(',') : searchParamsByTag
          }
          isMultiple={true}
          onChange={handleSelectTag}
          placeholder="Select Tag(s)"
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <DatePicker value={searchParamsByTime} options={postFilterTime} onSelectDate={handlSelectTime} />
      </Grid>
    </Grid>
  );
};

export default PostFilter;
