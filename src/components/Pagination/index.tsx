import { Button } from '@mui/material';

// Constants
import { COLORS } from '@/constants';

interface PaginationProps {
  hasPrevious: boolean,
  hasNext: boolean,
}

const Pagination = ({hasPrevious, hasNext}: PaginationProps): JSX.Element => {
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          borderColor: COLORS.DESCRIPTION,
          color: COLORS.DESCRIPTION,
          backgroundColor: 'white',
          '&:hover': {
            borderColor: COLORS.DESCRIPTION,
            backgroundColor: COLORS.AUTHOR_CARD_BACKGROUND
          },
          textTransform: 'none',
          fontSize: '16px'
        }}
        disabled={!hasPrevious}
      >
        Previous
      </Button>

      <Button
        variant="outlined"
        sx={{
          borderColor: COLORS.DESCRIPTION,
          color: COLORS.DESCRIPTION,
          backgroundColor: 'white',
          '&:hover': {
            borderColor: COLORS.DESCRIPTION,
            backgroundColor: COLORS.AUTHOR_CARD_BACKGROUND
          },
          textTransform: 'none',
          fontSize: '16px'
        }}
        disabled={!hasNext}
      >
        Next
      </Button>
    </>
  );
};

export default Pagination;
