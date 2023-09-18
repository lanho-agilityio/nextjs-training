import { Box, Card, Typography, styled } from '@mui/material';

export const CardStyled = styled(Card)`
  border: none;
  box-shadow: none;
`;

export const TagContainer = styled(Box)`
  display: flex;
  gap: 0.75rem;
`;

export const TitleStyled = styled(Typography)`
  margin-top: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.375;
`;
