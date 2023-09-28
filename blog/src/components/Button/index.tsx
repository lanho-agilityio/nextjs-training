'use client';
import { ButtonProps } from '@mui/material';
import { ButtonStyled } from './Button.styled';

export interface ButtonStyledProps extends ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  width?: number | string;
  height?: number;
  type?: 'button' | 'submit' | 'reset';
  hoverColor?: string;
  variant?: 'text' | 'outlined' | 'contained';
}

const Button = ({
  children,
  color = 'primary',
  onClick,
  width = '100%',
  height,
  type = 'button',
  variant = 'contained',
  ...props
}: ButtonStyledProps) => {
  return (
    <ButtonStyled
      className="bg-[#111827]"
      color={color}
      variant={variant}
      onClick={onClick}
      type={type}
      {...props}
      fullWidth
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
