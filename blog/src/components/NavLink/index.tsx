import { LinkProps } from '@mui/material';
import { NavLinkStyled } from './NavLink.styled';

export interface NavLinkStyledProps extends LinkProps {
  title: string;
  to: string;
}

const NavLink = ({ title, to, ...props }: NavLinkStyledProps): JSX.Element => {
  return (
    <NavLinkStyled href={to} {...props}>
      {title}
    </NavLinkStyled>
  );
};

export default NavLink;
