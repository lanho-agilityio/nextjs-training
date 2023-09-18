import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 1024px;
  @media (min-width: 1024px) {
    padding-bottom: 2rem;
  }
  @media (min-width: 1280px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export const PostListStyled = styled(Box)`
  display: grid;
  margin-top: 5rem;
  gap: 2.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    gap: 2.5rem;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
