import { memo } from 'react';
import { Container, Skeleton, Stack, Typography } from '@mui/material';

const LoginSkeleton = (): JSX.Element => {
  return (
    <Container sx={{ minHeight: '200px', paddingY: '25px' }}>
      <Typography sx={{ textAlign: 'center', fontSize: '20px', paddingBottom: '10px' }} variant="h1">
        Sign in
      </Typography>
      <Stack rowGap="20px">
        <Skeleton variant="rectangular" width={275} height={37} />
        <Skeleton variant="rectangular" width={275} height={37} />
        <Skeleton variant="rectangular" width={275} height={40} />
      </Stack>
    </Container>
  );
};

export default memo(LoginSkeleton);
