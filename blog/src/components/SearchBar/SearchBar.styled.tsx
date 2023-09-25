import { Box, TextField, styled } from '@mui/material';
import React from 'react';

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

export const SearchBarContainer = styled(FormBox)`
  margin-top: 1.25rem;
  //   max-width: 28rem;
`;

export const SearchInputContainer = styled(Box)`
  position: relative;
`;

export const SearchIconWrapper = styled(Box)`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-right: 0.75rem;
  align-items: center;
  pointer-events: none;
`;
