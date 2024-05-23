import { Suspense } from 'react';
import { Box } from '@mui/material';

// APIs
import { queryAllPosts } from '@/services';

// Components
import { PostList, Heading, Pagination } from '@/components';

export default async function CategoryPage({ params }: { params: { tag: string } }) {
  const { data: posts, total: totalPosts } = await queryAllPosts({ tag: params.tag });

  return (
    <main>
      <Heading title={params.tag} description={`${totalPosts} Articles`} />
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
