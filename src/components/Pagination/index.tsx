'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@mui/material';

// Constants
import { COLORS } from '@/constants';

interface PaginationProps {
  hasPrevious: boolean;
  hasNext: boolean;
}

const Pagination = ({ hasPrevious, hasNext }: PaginationProps): JSX.Element => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

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
      >
        Next
      </Button>
    </>
  );
};

export default Pagination;
