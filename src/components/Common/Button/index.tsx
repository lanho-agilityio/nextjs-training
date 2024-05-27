'use client';
import { Button, ButtonProps } from '@mui/material';

// Constants
import { COLORS } from '@/constants';

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  height?: number | string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'outlined' | 'contained';
  backgroundColor?: string;
  hoverColor?: string;
}

const CustomButton = ({
  children,
  onClick,
  type = 'button',
  variant = 'contained',
  backgroundColor,
  hoverColor,
  height = '56px',
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      type={type}
      {...props}
      sx={{
        ...props.sx,
        height: height,
        backgroundColor: backgroundColor,
        ':hover': {
          bgcolor: hoverColor,
        },
      }}
    >
      {children}
    </Button>
  );
};

const LinkButton = ({ children, ...props }: CustomButtonProps) => {
  return (
    <CustomButton
      type="button"
      variant="text"
      backgroundColor="white"
      hoverColor="unset"
      {...props}
      sx={{
        color: COLORS.NAV_LINK_PRIMARY,
        fontFamily: 'inherit',
        fontSize: '14px',
        fontWeight: 500,
        textTransform: 'capitalize',
        ':hover': {
          bgcolor: 'unset',
          color: COLORS.NAV_LINK_HOVER,
        },
        justifyContent: { xs: 'flex-start', md: 'center' },
        ...props.sx,
      }}
    >
      {children}
    </CustomButton>
  );
};

export { LinkButton };

export default CustomButton;
