import { Heading, PostForm } from '@/components';
import { Container } from '@mui/material';

export default function CreatePage() {
  return (
    <main>
      <Heading title="Create" description="Create a post here." />
      <Container sx={{ marginTop: '40px' }}>
        <PostForm />
      </Container>
    </main>
  );
}
