'use client';
import { Button, ButtonProps } from '@mui/material';

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
      sx={{
        height: height,
        backgroundColor: backgroundColor,
        ':hover': {
          bgcolor: hoverColor,
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
