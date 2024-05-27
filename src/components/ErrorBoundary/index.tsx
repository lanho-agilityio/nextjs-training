'use client';
import { memo, useCallback, useEffect } from 'react';
import { Box } from '@mui/material';

// Constants
import { COLORS } from '@/constants';

// Components
import { Button, Heading } from '../Common';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorBoundary = ({ error, reset }: ErrorProps) => {
  // Attempt to recover by trying to re-render the segment
  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' }}>
      <Heading title="Something went wrong!" />
      <Button onClick={handleReset} backgroundColor={COLORS.HEADING} hoverColor={COLORS.HEADING} sx={{ width: '70%' }}>
        Try again
      </Button>
    </Box>
  );
};

export default memo(ErrorBoundary);
