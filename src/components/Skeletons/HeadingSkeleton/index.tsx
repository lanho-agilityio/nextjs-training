import { memo } from 'react';
import { Box, Skeleton } from '@mui/material';

const HeadingSkeleton = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        paddingTop: {
          xs: '20px',
          sm: '20px',
          md: '32px',
        },
      }}
    >
      <Skeleton variant="rectangular" width={122} height={42} />
      <Skeleton variant="rectangular" width={200} height={42} />
    </Box>
  );
};

export default memo(HeadingSkeleton);
