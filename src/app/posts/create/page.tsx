import { Heading, PostForm } from '@/components';
import { Box } from '@mui/material';

export default function CreatePage() {
  return (
    <main>
      <Heading title="Create" description="Create a post here." />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '40px'
        }}
      >
        <PostForm />
      </Box>
    </main>
  );
}
