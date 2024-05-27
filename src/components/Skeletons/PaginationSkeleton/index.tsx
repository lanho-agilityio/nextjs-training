import { Skeleton, Box } from '@mui/material';
import { memo } from 'react';

export const PaginationSkeleton = (): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Skeleton variant="rectangular" width={122} height={42} />
      <Skeleton variant="rectangular" width={122} height={42} />
    </Box>
  );
};

export default memo(PaginationSkeleton);
