'use client';
import { useState } from 'react';
import { Box, IconButton, InputAdornment, Stack } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Controller, useForm } from 'react-hook-form';

// Constants
import { COLORS } from '@/constants';

// Components
import { Button, Input } from '../Common';

// Utils
import { validateMatched, validateRequired } from '@/utils';

interface LoginFormValues {
  username: string;
  password: string;
  reEnterPassword: string;
}

const validations = {
  username: {
    required: validateRequired,
  },
  password: {
    required: validateRequired,
  },
  reEnterPassword: {
    required: validateRequired,
    validateMatched: (value: string | null | undefined, compared: string) =>
      validateMatched(value, compared, 'password'),
  },
};

const SignUpForm = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const loginFormInitValues: LoginFormValues = {
    username: '',
    password: '',
    reEnterPassword: '',
  };

  const {
    control,
    watch,
    formState: { isValid },
  } = useForm<LoginFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    values: loginFormInitValues,
  });

  const isDisableSubmit = !isValid;

  return (
    <Box sx={{ width: { xs: '100%', sm: '70%', md: '50%' } }}>
      <Stack rowGap="5px">
        <Controller
          name="username"
          control={control}
          rules={{
            validate: validations.username,
          }}
          render={({ field: { onChange, value, ...rest }, fieldState: { error } }) => (
            <Input
              sx={{ paddingBottom: error?.message ? '0px ' : '24px' }}
              placeholder="Username"
              fullWidth
              value={value}
              onChange={(event) => {
                onChange(event);
              }}
              errorMessage={error?.message}
              {...rest}
            />
          )}
        ></Controller>
        <Controller
          name="password"
          control={control}
          rules={{
            validate: validations.password,
          }}
          render={({ field: { onChange, value, ...rest }, fieldState: { error } }) => (
            <Input
              sx={{ paddingBottom: error?.message ? '0px ' : '24px' }}
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              value={value}
              onChange={(event) => {
                onChange(event);
              }}
              errorMessage={error?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...rest}
            />
          )}
        ></Controller>
        <Controller
          name="reEnterPassword"
          control={control}
          rules={{
            validate: {
              ...validations.reEnterPassword,
              validateMatched: (value) => validations.reEnterPassword.validateMatched(value, watch('password')),
            },
          }}
          render={({ field: { onChange, value, ...rest }, fieldState: { error } }) => (
            <Input
              sx={{ paddingBottom: error?.message ? '0px ' : '24px' }}
              placeholder="Re-enter your password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              value={value}
              onChange={(event) => {
                onChange(event);
              }}
              errorMessage={error?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...rest}
            />
          )}
        ></Controller>
        <Button
          type="submit"
          backgroundColor={COLORS.HEADING}
          hoverColor={COLORS.HEADING}
          fullWidth
          disabled={isDisableSubmit}
          onClick={() => console.log('Submit')}
        >
          Sign up
        </Button>
      </Stack>
    </Box>
  );
};

export default SignUpForm;
