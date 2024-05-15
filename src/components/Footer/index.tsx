import { Box, Typography } from '@mui/material';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <Box paddingX="20px" paddingY="32px" marginTop="2.5rem" height="150px">
        <Typography fontSize="0.875rem" lineHeight="1.25rem" textAlign="center">
          Copyright © 2023 Stablo. All rights reserved.
        </Typography>
        <Typography fontSize="0.875rem" lineHeight="1.25rem" textAlign="center" color="#6b7280">
          Made by Web3Templates
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
