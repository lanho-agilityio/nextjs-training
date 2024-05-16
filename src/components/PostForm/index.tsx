import { Box, Stack } from '@mui/material';
import { Input } from '../Common';
import FilePicker from '../FilePicker';

const PostForm = (): JSX.Element => {
  return (
    <Box marginTop="40px" display="flex" justifyContent="center" alignItems="center">
      <Box marginTop="40px" width={{ xs: '100%', sm: '100%', md: '70%' }}>
        <Stack spacing={2}>
          <Input name="Title" placeholder="Title" fullWidth />
          <Input name="Content" placeholder="Content" multiline rows={7} fullWidth />
          <FilePicker accept="image/png, image/gif, image/jpeg">Upload Image</FilePicker>
        </Stack>
      </Box>
    </Box>
  );
};

export default PostForm;
