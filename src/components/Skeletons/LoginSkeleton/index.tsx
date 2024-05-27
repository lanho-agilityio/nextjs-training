import { memo } from 'react';
import { Skeleton, Stack } from '@mui/material';

export const LoginSkeleton = (): JSX.Element => {
  return (
    <Stack rowGap="20px">
      <Skeleton variant="rectangular" width={275} height={37} />
      <Skeleton variant="rectangular" width={275} height={37} />
      <Skeleton variant="rectangular" width={275} height={40} />
    </Stack>
  );
};

export default memo(LoginSkeleton);
