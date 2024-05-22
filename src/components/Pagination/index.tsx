'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// Constants
import { COLORS, PER_PAGE } from '@/constants';

interface PaginationProps {
  totalPosts: number
}

const Pagination = ({ totalPosts }: PaginationProps): JSX.Element => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

  const hasPrevious = currentPage > 1;
  const hasNext = currentPage * PER_PAGE < totalPosts;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const handleClickPrevious = () => {
    createPageURL(Number(currentPage) - 1);
  };

  const handleClickNext = () => {
    createPageURL(Number(currentPage) + 1);
  };

  return (
    <>
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
        onClick={handleClickPrevious}
        startIcon={<KeyboardArrowLeftIcon />}
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
            backgroundColor: COLORS.AUTHOR_CARD_BACKGROUND,
          },
          textTransform: 'none',
          fontSize: '16px',
        }}
        disabled={!hasNext}
        onClick={handleClickNext}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Next
      </Button>
    </>
  );
};

export default Pagination;
