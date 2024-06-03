import { Box, Skeleton } from '@mui/material';
import { memo } from 'react';

const PostCardSkeleton = (): JSX.Element => {
  return (
    <Box sx={{ width: 'full', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          position: 'relative',
          width: { xs: '90vw', sm: '42vw', md: '45vw', lg: '33vw' },
          height: '300px',
          maxWidth: {
            lg:  '300px',
            md: '452px',
            sm: '350px',
            xs: '470px',
          },
          borderRadius: '6px',
        }}
      >
        <Skeleton variant="rectangular" sx={{ width: ' 100%', height: ' 100%', borderRadius: '6px' }} />
      </Box>
    </Box>
  );
};

export default memo(PostCardSkeleton);
