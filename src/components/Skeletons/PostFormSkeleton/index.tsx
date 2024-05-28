import { memo } from 'react';
import { Box, Skeleton, Stack } from '@mui/material';

const PostFormSkeleton = (): JSX.Element => {
  return (
    <Box sx={{ width: { xs: '100%', sm: '100%', md: '70%' } }}>
      <Stack spacing="32px">
        <Skeleton variant="rectangular" sx={{ width: ' 100%', height: '56px' }} />
        <Skeleton variant="rectangular" sx={{ width: ' 100%', height: '161px' }} />
        <Skeleton variant="rectangular" sx={{ width: ' 100%', height: '56px' }} />
        <Skeleton variant="rectangular" sx={{ width: ' 100%', height: '56px' }} />
        <Skeleton variant="rectangular" sx={{ width: ' 100%', height: '56px' }} />
      </Stack>
    </Box>
  );
};

export default memo(PostFormSkeleton);
