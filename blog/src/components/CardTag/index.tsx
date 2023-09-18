import { LinkProps } from '@mui/material';
import { TagStyled } from './CardTag.styled';

export interface TagStyledProps extends LinkProps {
  title: string;
  href: string;
  color: string;
}

const CardTag = ({
  title,
  href,
  color,
  ...props
}: TagStyledProps): JSX.Element => {
  return (
    <TagStyled title={title} href={href} color={color} {...props}>
      {title}
    </TagStyled>
  );
};

export default CardTag;
