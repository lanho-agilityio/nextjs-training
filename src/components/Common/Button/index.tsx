'use client';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  width?: number | string;
  height?: number;
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
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      type={type}
      {...props}
      sx={{
        height: '56px',
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

export default CustomButton;
