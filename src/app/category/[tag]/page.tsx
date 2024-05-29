import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// APIs
import { queryAllPosts } from '@/services';

// Components
import { PostList, Heading, FailToLoad, PaginationSkeleton } from '@/components';

// Models
import { SearchParams } from '@/models';

const Pagination = dynamic(() => import('../../../components/Pagination'), {
  loading: () => <PaginationSkeleton />,
});

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = params.tag;

  return {
    title: `Category: ${tag}`,
    description: `See all posts about ${tag}`,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { tag: string };
  searchParams: SearchParams;
}) {
  const postsResult = await queryAllPosts({ tag: params.tag, ...searchParams });
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
          <Pagination totalPosts={totalPosts} />
        </Box>
      </Box>
    </main>
  );
}
