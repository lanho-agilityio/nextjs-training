import { memo } from 'react';
import { Box, Typography } from '@mui/material';

// Constants
import { COLORS } from '@/constants';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <Box
        sx={{ paddingX: '20px', paddingY: '32px', marginTop: '40px', borderTop: `1px solid ${COLORS.FOOTER_BORDER}` }}
      >
        <Typography sx={{ fontSize: '14px', lineHeight: '20px', textAlign: 'center' }}>
          Copyright © 2024 Stablo. All rights reserved.
        </Typography>
        <Typography sx={{ fontSize: '14px', lineHeight: '20px', textAlign: 'center', color: COLORS.FOOTER_TEXT }}>
          Made by Web3Templates
        </Typography>
      </Box>
    </footer>
  );
};

export default memo(Footer);
