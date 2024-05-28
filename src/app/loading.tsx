import { Box, Grid } from '@mui/material';

// Components
import { HeadingSkeleton, PaginationSkeleton, PostCardSkeleton } from '@/components';

export default function Loading() {
  const skeleton = Array(9).fill(0);


  return (
    <>
      <HeadingSkeleton />
      <Box sx={{ marginTop: '40px' }}>
        <Grid container rowSpacing={5} columnSpacing={5}>
          {skeleton.map((_, index) => (
            <Grid key={`post-${index}`} item xs={12} sm={6} md={6} lg={4}>
              <PostCardSkeleton />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
          <PaginationSkeleton />
        </Box>
      </Box>
    </>
  );
}
