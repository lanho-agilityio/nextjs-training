import { Grid } from '@mui/material';
import SearchInput from '../SearchInput';
import DatePicker from '../DatePicker';

export const PostFilter = (): JSX.Element => {
  return (
    <Grid container sx={{ marginBottom: '40px' }} spacing={2}>
      <Grid item xs={6}>
        <SearchInput />
      </Grid>
      <Grid item xs={3}>
        <DatePicker />
      </Grid>
    </Grid>
  );
};

export default PostFilter;
