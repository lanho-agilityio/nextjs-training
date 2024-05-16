import { Box, Typography } from '@mui/material';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <Box sx={{ paddingX: '20px', paddingY: '32px', marginTop: '40px', height: '150px' }}>
        <Typography sx={{ fontSize: '14px', lineHeight: '20px', textAlign: 'center' }}>
          Copyright © 2023 Stablo. All rights reserved.
        </Typography>
        <Typography sx={{ fontSize: '14px', lineHeight: '20px', textAlign: 'center', color: '#6b7280' }}>
          Made by Web3Templates
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
