import { Suspense } from 'react';
import { Box } from '@mui/material';

// APIs
import { queryAllPosts, queryAllTags } from '@/services';

// Components
import { PostList, Heading, PostFilter, Pagination } from '@/components';

// Models
import { SearchParams } from '@/models';

export default async function ArchivePage({ searchParams }: { searchParams?: SearchParams }) {
  const [postsQuery, tagsQuery] = await Promise.all([queryAllPosts(searchParams), queryAllTags()]);
  const { data: posts, total: totalPosts } = postsQuery;
  const { data: tags } = tagsQuery;

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
