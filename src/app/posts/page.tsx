import { Suspense } from 'react';
import { Box } from '@mui/material';

// APIs
import { queryAllCategory, queryAllPosts } from '@/services';

// Constants
import { PER_PAGE_ARCHIVE } from '@/constants';

// Components
import { PostList, Heading, PostFilter, Pagination } from '@/components';

// Models
import { SearchParams } from '@/models';

export default async function ArchivePage({ searchParams }: { searchParams: SearchParams }) {
  const [postsResult, tagsResults] = await Promise.all([queryAllPosts(searchParams, PER_PAGE_ARCHIVE), queryAllCategory()]);

  const { data: posts, total: totalPosts } = postsResult;
  const { data: tags } = tagsResults;


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
            <Pagination totalPosts={totalPosts} perPage={PER_PAGE_ARCHIVE}/>
          </Suspense>
        </Box>
      </Box>
    </main>
  );
}
