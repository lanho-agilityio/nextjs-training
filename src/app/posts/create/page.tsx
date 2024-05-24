import { Box } from '@mui/material';

// APIs
import { queryAllCategory } from '@/services';

// Components
import { Heading, PostForm } from '@/components';

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
