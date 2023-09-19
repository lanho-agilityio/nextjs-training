import { Box, Button, ButtonProps, styled } from '@mui/material';

export const FileUploadStyled = styled(Button)<ButtonProps>`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  border-radius: 0.375rem;
  width: 100%;
  font-weight: 600;
  color: #ffffff;
  background-color: #111827;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  :hover {
    background-color: #1f2937;
  }
`;

export const FileInformation = styled(Box)`
  padding-top: 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: black;
`;

export const PicWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  position: relative;
  z-index: 0;
  max-width: 1024px;

  @media (min-width: 1024px) {
    border-radius: 0.5rem;
  }
`;
