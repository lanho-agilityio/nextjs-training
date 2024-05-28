import { Box } from '@mui/material';

// Components
import { HeadingSkeleton, PaginationSkeleton, PostListSkeleton, PostFilterSkeleton } from '@/components';

export default function Loading() {
  return (
    <>
      <HeadingSkeleton />
      <Box sx={{ marginTop: '40px' }}>
        <PostFilterSkeleton />
        <PostListSkeleton />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
          <PaginationSkeleton />
        </Box>
      </Box>
    </>
  );
}
