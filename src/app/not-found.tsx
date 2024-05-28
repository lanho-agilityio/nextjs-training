import { Box } from '@mui/material';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { Heading, Link } from '@/components';

export default async function NotFound() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', marginTop: '100px' }}>
      <Heading title="Not Found" description="Could not find the requested resource." />
      <Link href={ROUTES.HOME} _style={{ color: COLORS.POST_LINK }}>
        ← Go to Homepage
      </Link>
    </Box>
  );
}
