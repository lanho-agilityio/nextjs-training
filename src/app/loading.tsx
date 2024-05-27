import { Box, CircularProgress } from '@mui/material';
import { COLORS } from '../constants';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px', color: COLORS.HEADING }}>
      <CircularProgress />
    </Box>
  );
}
