import { Link, Typography, styled } from '@mui/material';

export const TitleWrapper = styled(Typography)`
  margin-top: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.375;
  white-space: nowrap;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;

export const TitleStyled = styled(Typography)``;
