import { Box, Skeleton } from '@mui/material';
import { memo } from 'react';

const PostCardSkeleton = (): JSX.Element => {
  return (
    <Box sx={{ width: 'full', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '30vh', sm: '30vh', md: '33vh' },
          maxHeight: {
            lg: '401px',
            md: '560px',
            sm: '461px',
            xs: '600px',
          },
        }}
      >
        <Skeleton variant="rectangular" sx={{ width: ' 100%', height: ' 100%', borderRadius: '6px' }} />
      </Box>
    </Box>
  );
};

export default memo(PostCardSkeleton);
