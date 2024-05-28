import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { Box } from '@mui/material';

// APIs
import { queryAllCategory, queryPostDetail } from '@/services';

// Components
import { FailToLoad, Heading, PostFormSkeleton } from '@/components';

const PostForm = dynamic(() => import('../../../../components/PostForm'), {
  loading: () => <PostFormSkeleton />,
  ssr: false,
});

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;
  const response = await queryPostDetail(id);

  if (response.data) {
    const { title } = response.data;
    return {
      title: `Post: ${title}`,
      description: `Edit post ${title}`,
    };
  }
  return {
    title: `PostId: ${id}`,
    description: `Edit post with id: ${id}`,
  };
}

export default async function EditPage({ params }: { params: { id: string } }) {
  const { data, errorMessage } = await queryPostDetail(params.id);
  const { data: tags } = await queryAllCategory();

  if (!data) {
    notFound();
  }

  if (errorMessage) {
    return <FailToLoad error={errorMessage} />;
  }

  return (
    <main>
      <Heading title="Edit" description="Edit your post." />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '40px',
        }}
      >
        <PostForm tags={tags} data={data} />
      </Box>
    </main>
  );
}
