import { Link, styled } from '@mui/material';

export const NavLinkStyled = styled(Link)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #4b5563;
  :hover {
    color: #3b82f6;
  }
  text-decoration: none;
  @media (min-width: 768px) {
    text-align: center;
  }
`;
