import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// APIs
import { queryAllCategory, queryAllPosts } from '@/services';

// Constants
import { PER_PAGE_ARCHIVE } from '@/constants';

// Components
import { PostList, Heading, FailToLoad, PostFilterSkeleton, PaginationSkeleton } from '@/components';

// Models
import { SearchParams } from '@/models';

const PostFilter = dynamic(() => import('../../components/PostFilter'), {
  loading: () => <PostFilterSkeleton />,
});
const Pagination = dynamic(() => import('../../components/Pagination'), {
  loading: () => <PaginationSkeleton />,
});

export default async function ArchivePage({ searchParams }: { searchParams: SearchParams }) {
  const [postsResult, tagsResults] = await Promise.all([
    queryAllPosts(searchParams, PER_PAGE_ARCHIVE),
    queryAllCategory(),
  ]);

  const { data: posts, total: totalPosts, errorMessage: errorPost } = postsResult;
  const { data: tags, errorMessage: errorTag } = tagsResults;

  if (errorPost || errorTag) {
    return <FailToLoad error={errorPost || errorTag} />;
  }

  return (
    <main>
      <Heading title="Archive" description="See all posts we have ever written." />
      <Box sx={{ marginTop: '40px' }}>
        <PostFilter tags={tags} />
        <PostList posts={posts} isArchived={true} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
          <Pagination totalPosts={totalPosts} perPage={PER_PAGE_ARCHIVE} />
        </Box>
      </Box>
    </main>
  );
}
