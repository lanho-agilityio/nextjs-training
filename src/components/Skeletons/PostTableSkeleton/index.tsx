import { Box } from '@mui/material';

// Components
import { PaginationSkeleton, PostListSkeleton, PostFilterSkeleton } from '@/components';

export default function PostTableSkeleton() {
  return (
    <>
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
