'use client';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Constants
import { COLORS, PER_PAGE } from '@/constants';

interface PaginationProps {
  totalPosts: number;
  currentPage: number;
  perPage?: number;
  onClickPrevious: () => void;
  onClickNext: () => void;
}

const Pagination = ({
  totalPosts,
  currentPage,
  onClickPrevious,
  onClickNext,
  perPage = PER_PAGE,
}: PaginationProps): JSX.Element => {
  // Pagination
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage * perPage < totalPosts;

  return (
    <>
      {hasPrevious && (
        <Button
          name="previous"
          variant="outlined"
          sx={{
            borderColor: COLORS.DESCRIPTION,
            color: COLORS.DESCRIPTION,
            backgroundColor: 'white',
            '&:hover': {
              borderColor: COLORS.DESCRIPTION,
              backgroundColor: COLORS.AUTHOR_CARD_BACKGROUND,
            },
            textTransform: 'none',
            fontSize: '16px',
          }}
          disabled={!hasPrevious}
          onClick={onClickPrevious}
          startIcon={<KeyboardArrowLeftIcon />}
        >
          Previous
        </Button>
      )}

      {hasNext && (
        <Button
          variant="outlined"
          sx={{
            borderColor: COLORS.DESCRIPTION,
            color: COLORS.DESCRIPTION,
            backgroundColor: 'white',
            '&:hover': {
              borderColor: COLORS.DESCRIPTION,
              backgroundColor: COLORS.AUTHOR_CARD_BACKGROUND,
            },
            textTransform: 'none',
            fontSize: '16px',
          }}
          disabled={!hasNext}
          onClick={onClickNext}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Next
        </Button>
      )}
    </>
  );
};

export default Pagination;
