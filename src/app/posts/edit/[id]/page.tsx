import { Box } from '@mui/material';

// APIs
import { queryAllCategory, queryPostDetail } from '@/services';

// Components
import { Heading, PostForm } from '@/components';

export default async function EditPage({ params }: { params: { id: string } }) {
  const { data } = await queryPostDetail(params.id);
  const { data: tags } = await queryAllCategory();

  if (!data) {
    return <main>Post Not Found</main>;
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
