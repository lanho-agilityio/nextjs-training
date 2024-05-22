import { Box } from '@mui/material';

// Constants
import { ROUTES } from '@/constants';

// Components
import Link from '../Link';

// Models
import { PostTag } from '@/models';

interface PostTagProps {
  tag: PostTag;
}

const Tag = ({ tag }: PostTagProps): JSX.Element => {
  const { value: title, color } = tag;

  return (
    <Link title={title} href={ROUTES.CATEGORY(title)}>
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

export default Tag;
