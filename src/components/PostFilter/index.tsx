'use client';
import { ChangeEvent } from 'react';
import { Grid, SelectChangeEvent } from '@mui/material';

// Constants
import { FILTER_KEY, FILTER_TIME, POST_FILTER_TIME } from '@/constants';

// Components
import { SearchInput, DatePicker, CategorySelect } from '@/components';

// Models
import { PostCategory } from '@/models';

interface PostFilterProps {
  searchParams: URLSearchParams;
  tags: PostCategory[];
  onEnterSearchInput: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClearSearchInput: () => void;
  onSelectCategory: (value: string | string[]) => void;
  onSelectTime: (event: SelectChangeEvent) => void;
}

const PostFilter = ({
  searchParams,
  tags,
  onEnterSearchInput,
  onClearSearchInput,
  onSelectCategory,
  onSelectTime,
}: PostFilterProps): JSX.Element => {
  const searchParamsByQuery = searchParams.get(FILTER_KEY.QUERY) || '';
  const searchParamsByCategory = searchParams.get(FILTER_KEY.TAG) || [];
  const searchParamsByTime = searchParams.get(FILTER_KEY.TIME) || FILTER_TIME.ALL_TIME;

  const postFilterTime = Object.keys(POST_FILTER_TIME).map((key: string) => POST_FILTER_TIME[key as FILTER_TIME]);

  return (
    <Grid container sx={{ marginBottom: '40px' }} spacing={2}>
      <Grid item xs={12} md={6}>
        <SearchInput
          value={decodeURIComponent(searchParamsByQuery)}
          onChange={onEnterSearchInput}
          onClearSearchInput={onClearSearchInput}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <CategorySelect
          options={tags}
          value={
            typeof searchParamsByCategory === 'string'
              ? decodeURIComponent(searchParamsByCategory).split(',')
              : searchParamsByCategory
          }
          isMultiple={true}
          onChange={onSelectCategory}
          placeholder="Select Category(s)"
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <DatePicker value={searchParamsByTime} options={postFilterTime} onSelectDate={onSelectTime} />
      </Grid>
    </Grid>
  );
};

export default PostFilter;
