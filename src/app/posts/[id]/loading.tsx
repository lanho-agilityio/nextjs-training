import { Box, Skeleton } from '@mui/material';

// Components
import { HeadingSkeleton } from '@/components';

export default function Loading() {
  return (
    <>
      <HeadingSkeleton />
      <Box sx={{ marginTop: '40px' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '1024px',
            height: { xs: '240px', sm: '432px', md: '576px' },
          }}
        >
          <Skeleton variant="rectangular" sx={{ width: ' 100%', height: ' 100%', borderRadius: '6px' }} />
        </Box>
        <Skeleton variant="rectangular" sx={{ maxWidth: '762px', height: '100px' }} />
      </Box>
    </>
  );
}
