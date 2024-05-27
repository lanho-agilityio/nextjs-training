import { PaginationSkeleton, PostCardSkeleton, PostFilterSkeleton } from '@/components';
import { Box } from '@mui/material';

export default function Loading() {
  return (
    <>
      <Box sx={{ marginTop: '40px' }}>
        <PostFilterSkeleton />
        <PostCardSkeleton />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
          <PaginationSkeleton />
        </Box>
      </Box>
    </>
  );
}
