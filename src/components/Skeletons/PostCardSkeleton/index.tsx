import { Box, Skeleton } from '@mui/material';
import { memo } from 'react';

export const PostCardSkeleton = (): JSX.Element => {
  return (
    <Box sx={{ width: 'full', display: 'flex', flexDirection: 'column' }}>
      <Skeleton variant="rectangular" sx={{ width: 305, height: 400, borderRadius: '6px' }} />
    </Box>
  );
};

export default memo(PostCardSkeleton);
