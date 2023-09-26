import { Box, Typography, styled } from '@mui/material';

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

export const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AvatarWrapper = styled(Box)`\
  width: 75px;
  height: 75px;
  background-color: gray;
  border-radius: 999px;
`;

export const HeaderStyled = styled(Typography)`
  margin-top: 0.5rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  letter-spacing: -0.025em;

  @media (min-width: 1024px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
    line-height: 1.25;
  }
`;

export const DescriptionWrapper = styled(Box)`
  display: flex;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-top: 0.5rem;
  flex-direction: column;
  max-width: 36rem;
  text-align: center;
  color: #6b7280;
`;

export const DescriptionStyled = styled(Typography)``;
