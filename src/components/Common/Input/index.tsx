import { ForwardedRef, forwardRef } from 'react';
import { Box, TextField, TextFieldProps, Typography } from '@mui/material';

// Constants
import { COLORS } from '@/constants';

export type CustomInputProps = {
  name: string;
  placeholder?: string;
  errorMessage?: string;
  type?: string;
} & TextFieldProps;

const Input = (
  { name, type = 'string', errorMessage, placeholder, ...props }: CustomInputProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column">
      <TextField
        inputRef={ref}
        variant="outlined"
        name={name}
        placeholder={placeholder}
        type={type}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: COLORS.HEADING,
            },
            '&.Mui-error fieldset': {
              border: `2px solid ${COLORS.ERROR} `,
              borderRadius: '6px',
            },
          },
          '&::placeholder': {
            color: COLORS.HEADING,
            opacity: 1,
          },
        }}
        inputProps={{
          sx: {
            '&::placeholder': {
              color: COLORS.HEADING,
              opacity: 1,
            },
          },
        }}
        {...props}
        error={!!errorMessage}
      />
      {errorMessage && (
        <Typography variant="caption" sx={{ marginTop: '4px', color: COLORS.ERROR }}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default forwardRef(Input);
