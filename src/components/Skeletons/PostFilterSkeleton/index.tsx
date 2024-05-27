import { memo } from 'react';
import { Grid, Skeleton } from '@mui/material';

const PostFilterSkeleton = (): JSX.Element => {
  return (
    <Grid container sx={{ marginBottom: '40px' }} spacing={2}>
      <Grid item xs={12} md={6}>
        <Skeleton variant="rectangular" width="100%" height={56} />
      </Grid>
      <Grid item xs={6} md={3}>
        <Skeleton variant="rectangular" width="100%" height={56} />
      </Grid>
      <Grid item xs={6} md={3}>
        <Skeleton variant="rectangular" width="100%" height={56} />
      </Grid>
    </Grid>
  );
};

export default memo(PostFilterSkeleton);
