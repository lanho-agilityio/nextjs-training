import { Box, Typography } from '@mui/material';

// Constants
import { COLORS } from '@/constants';

interface HeadingProps {
  title: string;
  description?: string;
}

const Heading = ({ title, description }: HeadingProps): JSX.Element => {
  return (
    <Box sx={{ padding: 0 }}>
      <Typography
        variant="h1"
        sx={{
          marginTop: '8px',
          marginBottom: '12px',
          fontSize: {
            xs: '30px',
            sm: '30px',
            md: '36px',
            lg: '36px',
          },
          lineHeight: {
            xs: '36px',
            sm: '36px',
            md: '40px',
            lg: '40px',
          },
          fontWeight: 600,
          textAlign: 'center',
          color: COLORS.HEADING,
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography variant="subtitle1" sx={{ fontSize: '18px', lineHeight: '28px', textAlign: 'center' }}>
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default Heading;
