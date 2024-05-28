import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { Box } from '@mui/material';

// APIs
import { queryAllCategory } from '@/services';

// Components
import { Heading, PostFormSkeleton } from '@/components';

const PostForm = dynamic(() => import('../../../components/PostForm'), {
  loading: () => <PostFormSkeleton />,
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Create',
  description: 'Create a post',
};

export default async function CreatePage() {
  const { data: tags } = await queryAllCategory();

  return (
    <main>
      <Heading title="Create" description="Create a post here." />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '40px',
        }}
      >
        <PostForm tags={tags} />
      </Box>
    </main>
  );
}
