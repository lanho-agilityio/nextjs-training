import { IconButton, styled } from '@mui/material';

export const NavButtonStyled = styled(IconButton)`
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  border-radius: 0.375rem;
  color: #6b7280;
  &:focus {
    outline: none;
    color: #3b82f6;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
