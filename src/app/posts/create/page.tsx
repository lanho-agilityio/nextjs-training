import { Heading, PostForm } from '@/components';
import { Box } from '@mui/material';

export default function CreatePage() {
  return (
    <main>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Heading title="Create" description="Create a post here." />
        <PostForm />
      </Box>
    </main>
  );
}
