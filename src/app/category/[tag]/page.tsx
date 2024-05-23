import { Suspense } from 'react';
import { Box } from '@mui/material';

// Constants
import { HOST } from '@/constants';

// Components
import { PostList, Heading, Pagination } from '@/components';

// Utils
import { generateSearchParams } from '@/utils';

export default async function CategoryPage({ params }: { params: { tag: string } }) {
  const filter = generateSearchParams({ tag: params.tag });

  const postRes = await fetch(`${HOST}posts/apis?${filter}`);
  const postResults = await postRes.json();
  const posts = postResults.data || [];
  const totalPosts = Number(postResults.total) || 0;

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
