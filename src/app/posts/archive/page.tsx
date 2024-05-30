import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// APIs
import { queryAllCategory, queryAllPosts } from '@/services';

// Components
import { Heading, FailToLoad, PostTableSkeleton } from '@/components';

// Models
import { SearchParams } from '@/models';

const PostTable = dynamic(() => import('../../../components/PostTable'), {
  loading: () => <PostTableSkeleton />,
});

export const metadata: Metadata = {
  title: 'Archive',
  description: 'See all posts we have ever written',
  keywords: ['posts'],
  openGraph: {
    type: 'website',
    title: 'Archive',
    description: 'See all posts we have ever written',
  },
};

export default async function ArchivePage({ searchParams }: { searchParams: SearchParams }) {
  const [postsResult, tagsResults] = await Promise.all([queryAllPosts(searchParams), queryAllCategory()]);

  const { data: posts, total: totalPosts, errorMessage: errorPosts } = postsResult;
  const { data: tags, errorMessage: errorTag } = tagsResults;

  if (errorPosts || errorTag) {
    return <FailToLoad error={errorPosts || errorTag} />;
  }

  return (
    <main>
      <Heading title="Archive" description="See all posts we have ever written." />
      <Box sx={{ marginTop: '40px' }}>
        <PostTable posts={posts} totalPosts={totalPosts} isFiltered={true} tags={tags} />
      </Box>
    </main>
  );
}
