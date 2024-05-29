import { memo } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { Link } from '@/components';

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
            lg: !isArchived && isRecentPost ? '265px' : '301px',
            md: !isArchived && isRecentPost ? '265px' : '460px',
            sm: !isArchived && isRecentPost ? '203px' : '361px',
            xs: '500px',
          },
          background: COLORS.DESCRIPTION_ICON,
          borderRadius: '6px',
        }}
      >
        {src && (
          <Image alt={alt} src={src} fill style={{ borderRadius: '6px' }} sizes="(max-width: 984px) 30vw, 33vw" loading='lazy' />
        )}
      </Box>
    </Link>
  );
};

export default memo(PostCardImage);
