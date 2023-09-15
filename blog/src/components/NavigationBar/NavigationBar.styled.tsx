import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
  margin-right: auto;
  margin-left: auto;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 1024px;
  @media (min-width: 1024px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media (min-width: 1280px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export const NavigationBarContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 2.5rem;
  }
`;

export const NavigationBarContainerMobile = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const DetailsContainer = styled(Box)`
  display: flex;
  margin-top: 1rem;
  margin-left: -1rem;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavigationLeft = styled(Box)`
  display: none;
  flex-direction: column;
  order: 1;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex: 1 1 0%;
    order: 0;
    justify-content: flex-end;
    width: auto;
  }
`;

export const NavigationRight = styled(Box)`
  display: none;
  flex-direction: column;
  order: 2;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex: 1 1 0%;
    order: 0;
    width: auto;
  }
`;
