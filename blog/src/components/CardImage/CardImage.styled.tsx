import { Box, Link, styled } from '@mui/material';

export const LinkStyled = styled(Link)`
  aspect-ratio: 1/1;
  display: block;
  position: relative;
  cursor: pointer;
`;

export const CardImageWrapper = styled(Box)`
  overflow: hidden;
  border-radius: 0.375rem;
  background-color: #f3f4f6;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  :hover {
    --transform-scale-x: 1.05;
    --transform-scale-y: 1.05;
  }
`;
