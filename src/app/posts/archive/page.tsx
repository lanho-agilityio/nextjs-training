import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// APIs
import { queryAllCategory } from '@/services';

// Components
import { Heading, FailToLoad, PostTableSkeleton } from '@/components';

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

export default async function ArchivePage() {
  const { data: tags, errorMessage: errorTag } = await queryAllCategory();

  if (errorTag) {
    return <FailToLoad error={errorTag} />;
  }

  return (
    <main>
      <Heading title="Archive" description="See all posts we have ever written." />
      <Box sx={{ marginTop: '40px' }}>
        <PostTable isFiltered={true} tags={tags} />
      </Box>
    </main>
  );
}
