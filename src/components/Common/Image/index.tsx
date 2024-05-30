'use client';
import { useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';

// Constants
import { BLUR_DATA_BASE64 } from '@/constants';

interface ImageWithFallbackProps extends ImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

const CustomImage = ({ src, alt, fallbackSrc = '/not-found.svg', ...props }: ImageWithFallbackProps): JSX.Element => {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      loader={({ src }) => src}
      placeholder="blur"
      blurDataURL={BLUR_DATA_BASE64}
      fill={props.width || props.height ? false : true}
      style={{ borderRadius: '6px' }}
      sizes="(max-width: 984px) 30vw, 33vw"
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
    />
  );
};

export default CustomImage;
