import { Stack } from '@mui/material';
import SearchInput from '../SearchInput';

export const PostFilter = (): JSX.Element => {
  return (
    <Stack sx={{marginBottom: "40px"}}>
      <SearchInput />
    </Stack>
  );
};

export default PostFilter;
