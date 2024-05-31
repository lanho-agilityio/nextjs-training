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
          width: { xs: '90vw', sm: '42vw', md: '45vw', lg: !isArchived && isRecentPost ? '45vw' : '33vw' },
          height: '300px',
          maxWidth: {
            lg: !isArchived && isRecentPost ? '500px' : '300px',
            md: '452px',
            sm: '350px',
            xs: '470px',
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
