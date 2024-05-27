import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// APIs
import { queryAllCategory, queryPostDetail } from '@/services';

// Constants
import { ERROR_MESSAGES } from '@/constants';

// Components
import { FailToLoad, Heading } from '@/components';

const PostForm = dynamic(() => import('../../../../components/PostForm'), { ssr: false });

export default async function EditPage({ params }: { params: { id: string } }) {
  const { data, errorMessage } = await queryPostDetail(params.id);
  const { data: tags } = await queryAllCategory();

  if (!data) {
    return <FailToLoad error={ERROR_MESSAGES.POST_NOT_FOUND} />;
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
