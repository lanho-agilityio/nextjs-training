import { Box, Grid } from '@mui/material';

// Components
import { HeadingSkeleton, PaginationSkeleton, PostCardSkeleton, PostFilterSkeleton } from '@/components';

export default function Loading() {
  return (
    <>
      <HeadingSkeleton />
      <Box sx={{ marginTop: '40px' }}>
        <PostFilterSkeleton />
        <Grid container rowSpacing={5} columnSpacing={5}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <PostCardSkeleton />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <PostCardSkeleton />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <PostCardSkeleton />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <PostCardSkeleton />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <PostCardSkeleton />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <PostCardSkeleton />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <PostCardSkeleton />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <PostCardSkeleton />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <PostCardSkeleton />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
          <PaginationSkeleton />
        </Box>
      </Box>
    </>
  );
}
