import Image from 'next/image';
import Link from 'next/link';

export interface PostCardImageProps {
  src: string;
  alt: string;
  to: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
}

const PostCardImage = ({ alt, src, to, width = 302, height = 302 }: PostCardImageProps): JSX.Element => {
  return (
    <Link href={`/${to}`} id='post-image'>
      <Image alt={alt} src={src} width={width} height={height} />
    </Link>
  );
};

export default PostCardImage;
