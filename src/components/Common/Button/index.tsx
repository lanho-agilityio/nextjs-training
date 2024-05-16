'use client';
import { Button, ButtonProps } from '@mui/material';

export interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  width?: number | string;
  height?: number;
  type?: 'button' | 'submit' | 'reset';
  hoverColor?: string;
  variant?: 'text' | 'outlined' | 'contained';
}

const CustomButton = ({
  children,
  color = 'primary',
  onClick,
  type = 'button',
  variant = 'contained',
  ...props
}: CustomButtonProps) => {
  return (
    <Button color={color} variant={variant} onClick={onClick} type={type} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
