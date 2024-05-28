import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// APIs
import { queryAllPosts } from '@/services';

// Components
import { PostList, Heading, FailToLoad, PaginationSkeleton } from '@/components';

const Pagination = dynamic(() => import('../../../components/Pagination'), {
  loading: () => <PaginationSkeleton />,
});
export default async function CategoryPage({ params }: { params: { tag: string } }) {
  const postsResult = await queryAllPosts({ tag: params.tag });
  const { data: posts, total: totalPosts, errorMessage } = postsResult;

  if (errorMessage) {
    return <FailToLoad error={errorMessage} />;
  }

  return (
    <main>
      <Heading title={decodeURIComponent(params.tag)} description={`${totalPosts} Articles`} />
      <Box sx={{ marginTop: '40px' }}>
        <PostList posts={posts} isArchived={true} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Pagination totalPosts={totalPosts} />
          </Suspense>
        </Box>
      </Box>
    </main>
  );
}
