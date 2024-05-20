import { Suspense } from 'react';
import { Box } from '@mui/material';

// Constants
import { MOCK_POSTS_LIST } from '@/constants';

// Components
import { PostList, Heading, PostFilter, Pagination } from '@/components';

interface searchParamsProps {
  query?: string;
  tag?: string;
  time?: string;
  page?: string;
}

export default function ArchivePage({ searchParams }: { searchParams?: searchParamsProps }) {
  console.log(searchParams);
  return (
    <main>
      <Heading title="Archive" description="See all posts we have ever written." />
      <Box sx={{ marginTop: '40px' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <PostFilter />
        </Suspense>
        <PostList posts={MOCK_POSTS_LIST} isArchived={true} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Pagination hasNext={true} hasPrevious={true} />
          </Suspense>
        </Box>
      </Box>
    </main>
  );
}
