import { Button, ButtonProps, styled } from '@mui/material';

export const ButtonStyled = styled(Button)<ButtonProps>`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  border-radius: 0.375rem;
  width: 100%;
  font-weight: 600;
  color: #ffffff;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  :hover {
    background-color: #1f2937;
  }
`;
