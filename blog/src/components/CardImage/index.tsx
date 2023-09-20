import { LinkProps } from '@mui/material';
import Image from 'next/image';
import { CardImageWrapper, LinkStyled } from './CardImage.styled';

export interface CardImageProps extends LinkProps {
  imagePath: string;
  href: string;
}

const CardImage = ({
  imagePath,
  href,
  ...props
}: CardImageProps): JSX.Element => {
  return (
    <CardImageWrapper>
      <LinkStyled href={href} {...props}>
        <Image
          src={imagePath !== "" ? imagePath: '/postPic.png'}
          alt="Post Image"
          width={100}
          height={100}
          priority
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            inset: '0px',
            color: 'transparent'
          }}
        ></Image>
      </LinkStyled>
    </CardImageWrapper>
  );
};

export default CardImage;
