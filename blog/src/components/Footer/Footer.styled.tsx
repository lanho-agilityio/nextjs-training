import { Box, Typography, styled } from '@mui/material';

export const Container = styled(Box)`
  margin-right: auto;
  margin-left: auto;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 2.5rem;
  border-top-width: 1px;
  border-color: #f3f4f6;
  max-width: 1024px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  @media (min-width: 1024px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media (min-width: 1280px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export const Copyright = styled(Typography)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
`;

export const Made = styled(Typography)`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  color: #6b7280;
`;

export const ThemeWrapper = styled(Box)`
  display: flex;
  margin-top: 0.5rem;
  justify-content: center;
  align-items: center;
`;
