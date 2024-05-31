import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
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
      openGraph: {
        type: 'website',
        title: `Post: ${title}`,
        description: `Edit post ${title}`,
      },
    };
  }
  return {
    title: `PostId: ${id}`,
    description: `Edit post with id: ${id}`,
  };
}

export default async function EditPage({ params }: { params: { id: string } }) {
  const userId = cookies().get('id')?.value;

  const [postsResult, tagsResults] = await Promise.all([queryPostDetail(params.id), queryAllCategory()]);

  const { data: post, errorMessage: errorPost } = postsResult;
  const { data: tags, errorMessage: errorTag } = tagsResults;

  const formData = userId === post?.userId ? post : null;

  if (errorPost || errorTag) {
    return <FailToLoad error={errorPost || errorTag} />;
  }

  return (
    <main>
      <Heading
        title={formData ? 'Edit' : 'Create'}
        description={formData ? 'Edit your post.' : 'Create a post here.'}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '40px',
        }}
      >
        <PostForm tags={tags} data={formData} />
      </Box>
    </main>
  );
}
