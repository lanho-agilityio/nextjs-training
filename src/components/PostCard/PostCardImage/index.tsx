import { memo } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { Link } from '../../Common';

interface PostCardImageProps {
  alt: string;
  to: string;
  src?: string;
  isRecentPost?: boolean;
  isArchived?: boolean;
}

const PostCardImage = ({ alt, src, to, isRecentPost = false, isArchived = false }: PostCardImageProps): JSX.Element => {
  return (
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
      }}
    >
      <Link href={ROUTES.POST_DETAIL(to)}>
        {src ? (
          <Image alt={alt} src={src} fill style={{ borderRadius: '6px' }} sizes="(max-width: 768px) 30vw, 33vw" />
        ) : (
          <Box sx={{ background: COLORS.DESCRIPTION_ICON, width: '100%', height: '100%', borderRadius: '6px' }}></Box>
        )}
      </Link>
    </Box>
  );
};

export default memo(PostCardImage);
