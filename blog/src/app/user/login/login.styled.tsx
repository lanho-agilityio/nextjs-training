import { Box, Typography, styled } from '@mui/material';
import React from 'react';

export const Container = styled(Box)`
  margin-right: auto;
  margin-left: auto;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 500px;

  @media (min-width: 1024px) {
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

export const HeaderStyled = styled(Typography)`
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
    line-height: 1.375;
  }
`;

export const FormBox = React.forwardRef(function render(
  props: any,
  ref: React.Ref<unknown> | undefined
) {
  return (
    <Box ref={ref} component="form" autoComplete="off" {...props}>
      {props.children}
    </Box>
  );
});

export const FormContainer = styled(FormBox)`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;
