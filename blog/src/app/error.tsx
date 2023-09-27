'use client';
import { Box, Typography } from '@mui/material';

const Error = ({ error }: { error: Error }) => {
  return (
    <Box>
      Something went wrong!
      <Typography>{error.message}</Typography>
    </Box>
  );
};

export default Error;
