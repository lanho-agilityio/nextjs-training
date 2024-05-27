import { Box, Typography } from '@mui/material';

// Constants
import { COLORS, ROUTES } from '../../constants';

// Components
import { Heading, Link } from '../Common';

interface FailToLoadProps {
  error: string;
}

const FailToLoad = ({ error }: FailToLoadProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Heading title="Fail to load" description="Please try again later." />
      <Typography
        variant="subtitle1"
        sx={{ textAlign: 'center', color: COLORS.ERROR, fontSize: '18px', lineHeight: '28px', paddingTop: '15px' }}
      >
        Error: {error}
      </Typography>
      <Link href={ROUTES.HOME} _style={{ color: COLORS.POST_LINK }}>
        ← Go to Homepage
      </Link>
    </Box>
  );
};

export default FailToLoad;
