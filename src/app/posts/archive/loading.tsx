import { Box } from '@mui/material';

// Components
import { HeadingSkeleton, PostTableSkeleton } from '@/components';

export default function Loading() {
  return (
    <>
      <HeadingSkeleton />
      <Box sx={{ marginTop: '40px' }}>
        <PostTableSkeleton />
      </Box>
    </>
  );
}
