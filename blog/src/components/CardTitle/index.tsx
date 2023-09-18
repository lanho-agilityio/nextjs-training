import { LinkProps } from '@mui/material';
import { LinkStyled, TitleStyled, TitleWrapper } from './CardTitle.styled';

export interface CardTitleProps extends LinkProps {
  title: string;
  href: string;
}

const CardTitle = ({ title, href, ...props }: CardTitleProps): JSX.Element => {
  return (
    <TitleWrapper variant="h1">
      <LinkStyled href={href} {...props}>
        {/* <TitleStyled> */}
        {title}
        {/* </TitleStyled> */}
      </LinkStyled>
    </TitleWrapper>
  );
};

export default CardTitle;
