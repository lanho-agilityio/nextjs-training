import Image from 'next/image';
import { Box } from '@mui/material';

// Constants
import { ROUTES } from '@/constants';

// Components
import { Link } from '../../Common';

interface PostCardImageProps {
  src: string;
  alt: string;
  to: string;
  isRecentPost?: boolean;
  isArchived?: boolean;
}

const PostCardImage = ({ alt, src, to, isRecentPost = false, isArchived = false }: PostCardImageProps): JSX.Element => {
  return (
    <Box
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
      id="post-image"
    >
      <Link href={ROUTES.POST_DETAIL(to)}>
        <Image alt={alt} src={src} fill style={{ borderRadius: '6px' }} sizes="(max-width: 768px) 30vw, 33vw" />
      </Link>
    </Box>
  );
};

export default PostCardImage;
