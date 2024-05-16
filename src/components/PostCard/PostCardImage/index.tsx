import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export interface PostCardImageProps {
  src: string;
  alt: string;
  to: string;
  isRecentPost?: boolean;
}

const PostCardImage = ({ alt, src, to, isRecentPost=false }: PostCardImageProps): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '30vh', sm: '30vh', md: '33vh' },
        maxHeight: { lg: isRecentPost? '265px': '301px', md: isRecentPost? '265px': '460px', sm: isRecentPost? '203px': '361px', xs: '500px' },
      }}
      id="post-image"
    >
      <Link href={`/${to}`}>
        <Image alt={alt} src={src} fill style={{ borderRadius: '6px' }} sizes="(max-width: 768px) 30vw, 33vw" />
      </Link>
    </Box>
  );
};

export default PostCardImage;
