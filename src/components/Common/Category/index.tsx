import { memo } from 'react';
import { Box } from '@mui/material';

// Constants
import { ROUTES } from '@/constants';

// Components
import Link from '../Link';

// Models
import { PostCategory } from '@/models';

interface PostCategoryProps {
  tag: PostCategory;
}

const Category = ({ tag }: PostCategoryProps): JSX.Element => {
  const { value: title, color } = tag;

  return (
    <Link aria-label={title} title={title} href={ROUTES.CATEGORY(title)}>
      <Box
        sx={{
          display: 'inline-block',
          marginTop: '20px',
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: 500,
          textTransform: 'uppercase',
          color: `${color}`,
        }}
        component="span"
      >
        {title}
      </Box>
    </Link>
  );
};

export default memo(Category);
