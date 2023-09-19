import { Link, styled } from '@mui/material';
import { TagStyledProps } from '.';

export const TagStyled = styled(Link)<TagStyledProps>`
  display: inline-block;
  margin-top: 1.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  ${({ color }) => `color: ${color}`};
`;
