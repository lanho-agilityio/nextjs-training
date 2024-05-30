import { memo } from 'react';
import { Box } from '@mui/material';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { Link, Image } from '@/components';

interface PostCardImageProps {
  alt: string;
  to: string;
  src?: string;
  isRecentPost?: boolean;
  isArchived?: boolean;
}

const PostCardImage = ({ alt, src, to, isRecentPost = false, isArchived = false }: PostCardImageProps): JSX.Element => {
  return (
    <Link aria-label="post-detail-page" href={ROUTES.POST_DETAIL(to)}>
      <Box
        id="post-image"
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '30vh', sm: '30vh', md: '33vh' },
          maxHeight: {
            lg: !isArchived && isRecentPost ? '265px' : '300px',
            md: !isArchived && isRecentPost ? '265px' : '350px',
            sm: !isArchived && isRecentPost ? '203px' : '300px',
            xs: '300px',
          },
          background: COLORS.DESCRIPTION_ICON,
          borderRadius: '6px',
        }}
      >
        {src && <Image alt={alt} src={src} />}
      </Box>
    </Link>
  );
};

export default memo(PostCardImage);
