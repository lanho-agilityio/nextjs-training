import { Container, Stack } from '@mui/material';
import { Input } from '../Common';
import FilePicker from '../FilePicker';

const PostForm = (): JSX.Element => {
  return (
    <Container sx={{ marginTop: '40px' }}>
      <Stack spacing={2}>
        <Input name="Title" placeholder="Title" />
        <Input name="Content" placeholder="Content" multiline rows={7} />
        <FilePicker accept="image/png, image/gif, image/jpeg">Upload Image</FilePicker>
      </Stack>
    </Container>
  );
};

export default PostForm;
