import { Suspense } from 'react';
import { Box } from '@mui/material';

// Components
import { PostList, Heading, PostFilter, Pagination } from '@/components';

// Models
import { SearchParams } from '@/models';

// Utils
import { generateSearchParams } from '@/utils';

export default async function ArchivePage({ searchParams }: { searchParams: SearchParams }) {
  const filter = generateSearchParams(searchParams);

  const postRes = await fetch(`http://localhost:3000/posts/apis?${filter}`);
  const postResults = await postRes.json();
  const posts = postResults.data || [];
  const totalPosts = Number(postResults.total) || 0;

  const tagRes = await fetch(`http://localhost:3000/category/apis`);
  const tagResults = await tagRes.json();
  const tags = tagResults || [];

  return (
    <main>
      <Heading title="Archive" description="See all posts we have ever written." />
      <Box sx={{ marginTop: '40px' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <PostFilter tags={tags} />
        </Suspense>
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
