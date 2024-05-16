import { Box, TextField, Typography } from '@mui/material';
import { ForwardedRef, forwardRef } from 'react';

export interface InputProps {
  name: string;
  placeholder?: string;
  errorMessage?: string;
  labelName?: string;
  type?: string;
}

const Input = (
  { type = 'string', name, errorMessage, placeholder, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <Box display="flex" flexDirection="column">
      <TextField
        ref={ref}
        variant="outlined"
        name={name}
        placeholder={placeholder}
        type={type}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
            '&.Mui-error fieldset': {
              border: '2px solid #DC2626 ',
              borderRadius: '6px',
            },
          },
        }}
        inputProps={{
          sx: {
            '&::placeholder': {
              color: 'black',
              opacity: 1,
            },
            height: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '16px',
            paddingRight: '16px',
            border: '2px solid #d4d4d4',
            borderRadius: '6px',
          },
        }}
        {...props}
        error={!!errorMessage}
      />
      {errorMessage && (
        <Typography variant="caption" marginTop="4px" color="#DC2626">
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default forwardRef(Input);
