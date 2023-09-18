import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavButtonStyled } from './NavButton.styled';
import { IconButtonProps } from '@mui/material';

export interface NavButtonStyledProps extends IconButtonProps {
  clicked?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const NavButton = ({
  clicked,
  onClick,
  ...props
}: NavButtonStyledProps): JSX.Element => {
  return (
    <NavButtonStyled
      aria-label="menu"
      size="large"
      onClick={onClick}
      {...props}
    >
      {clicked ? (
        <CloseIcon fontSize="inherit" />
      ) : (
        <MenuIcon fontSize="inherit" />
      )}
    </NavButtonStyled>
  );
};

export default NavButton;