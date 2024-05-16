import { Box, TextField, TextFieldProps, Typography } from '@mui/material';
import { ForwardedRef, forwardRef } from 'react';

export type CustomInputProps = {
  name: string;
  placeholder?: string;
  errorMessage?: string;
  labelName?: string;
  type?: string;
} & TextFieldProps;

const STYLE_DEFAULT_INPUT = {
  paddingTop: '12px',
  paddingBottom: '12px',
  paddingLeft: '16px',
  paddingRight: '16px',
  border: '2px solid #d4d4d4',
  borderRadius: '6px',
};

const Input = (
  { type = 'string', name, errorMessage, placeholder, ...props }: CustomInputProps,
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
            ...(!props.multiline && { ...STYLE_DEFAULT_INPUT }),
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
