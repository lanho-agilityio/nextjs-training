import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// APIs
import { queryAllCategory, queryAllPosts } from '@/services';

// Constants
import { PER_PAGE } from '@/constants';

// Components
import { PostList, Heading, FailToLoad, PostFilterSkeleton, PaginationSkeleton, PostNotFound } from '@/components';

// Models
import { SearchParams } from '@/models';

const PostFilter = dynamic(() => import('../../../components/PostFilter'), {
  loading: () => <PostFilterSkeleton />,
});
const Pagination = dynamic(() => import('../../../components/Pagination'), {
  loading: () => <PaginationSkeleton />,
});

export const metadata: Metadata = {
  title: 'Archive',
  description: 'See all posts we have ever written',
};

export default async function ArchivePage({ searchParams }: { searchParams: SearchParams }) {
  const [postsResult, tagsResults] = await Promise.all([queryAllPosts(searchParams), queryAllCategory()]);

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
        {posts.length > 0 ? <PostList posts={posts} isArchived={true} /> : <PostNotFound />}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
          <Pagination totalPosts={totalPosts} perPage={PER_PAGE} />
        </Box>
      </Box>
    </main>
  );
}
