import { Box } from '@mui/material';

// Components
import { HeadingSkeleton, PostFormSkeleton } from '@/components';

export default function Loading() {
  return (
    <>
      <HeadingSkeleton />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '40px',
        }}
      >
        <PostFormSkeleton />
      </Box>
    </>
  );
}
