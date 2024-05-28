import { Box } from '@mui/material';

// Components
import { HeadingSkeleton, PaginationSkeleton, PostListSkeleton } from '@/components';

export default function Loading() {
  return (
    <>
      <HeadingSkeleton />
      <Box sx={{ marginTop: '40px' }}>
        <PostListSkeleton />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
          <PaginationSkeleton />
        </Box>
      </Box>
    </>
  );
}
