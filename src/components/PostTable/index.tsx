'use client';
import { ChangeEvent, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Box, SelectChangeEvent } from '@mui/material';

// Constants
import { FILTER_KEY, PER_PAGE } from '@/constants';

// Components
import { PostFilter, PostList, PostNotFound, Pagination } from '@/components';

// Models
import { Post, PostCategory } from '@/models';

// Utils
import { isEmpty } from '@/utils';

interface PostTableProps {
  posts: Post[];
  totalPosts: number;
  tags?: PostCategory[];
  isFiltered?: boolean;
}

const PostTable = ({ posts, totalPosts, tags = [], isFiltered = false }: PostTableProps): JSX.Element => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  // Pagination
  const currentPage = Number(searchParams.get('page')) || 1;

  const generateSearchParams = useCallback(
    (queryKey: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (isEmpty(value)) {
        params.delete(queryKey);
      } else {
        params.set(queryKey, encodeURIComponent(value));
      }
      queryKey !== FILTER_KEY.PAGE && params.set(FILTER_KEY.PAGE, '1');
      replace(`${pathname}?${params.toString()}`);
    },
    [replace, pathname, searchParams],
  );

  const handleClickPrevious = useCallback(() => {
    generateSearchParams(FILTER_KEY.PAGE, (Number(currentPage) - 1).toString());
  }, [generateSearchParams, currentPage]);

  const handleClickNext = useCallback(() => {
    generateSearchParams(FILTER_KEY.PAGE, (Number(currentPage) + 1).toString());
  }, [generateSearchParams, currentPage]);

  const handleEnterSearchInput = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      generateSearchParams(FILTER_KEY.QUERY, event.target.value);
    },
    [generateSearchParams],
  );

  const handleClearSearchInput = useCallback(() => {
    generateSearchParams(FILTER_KEY.QUERY, '');
  }, [generateSearchParams]);

  const handleSelectCategory = useCallback(
    (value: string | string[]) => {
      const search = typeof value === 'string' ? value.split(',') : value;
      generateSearchParams(FILTER_KEY.TAG, search.join(','));
    },
    [generateSearchParams],
  );

  const handlSelectTime = useCallback(
    (event: SelectChangeEvent) => {
      generateSearchParams(FILTER_KEY.TIME, event.target.value);
    },
    [generateSearchParams],
  );

  return (
    <Box sx={{ marginTop: '40px' }}>
      {isFiltered && (
        <PostFilter
          searchParams={searchParams}
          tags={tags}
          onEnterSearchInput={handleEnterSearchInput}
          onClearSearchInput={handleClearSearchInput}
          onSelectCategory={handleSelectCategory}
          onSelectTime={handlSelectTime}
        />
      )}
      {posts.length > 0 ? <PostList posts={posts} isArchived={true} /> : <PostNotFound />}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
        <Pagination
          totalPosts={totalPosts}
          currentPage={currentPage}
          perPage={PER_PAGE}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPrevious}
        />
      </Box>
    </Box>
  );
};

export default PostTable;
