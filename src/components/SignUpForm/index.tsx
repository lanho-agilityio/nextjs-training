'use client';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, IconButton, InputAdornment, Stack } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { Button, Input } from '@/components';

// Hooks
import { useAuthContext } from '@/hooks';
import { useToast } from '../Toast';

// Models
import { UserRegister } from '@/models';

// Utils
import { validateMatched, validateRequired } from '@/utils';

const validations = {
  username: {
    required: validateRequired,
  },
  password: {
    required: validateRequired,
  },
  confirmPassword: {
    required: validateRequired,
    validateMatched: (value: string | null | undefined, compared: string) =>
      validateMatched(value, compared, 'password'),
  },
};

const SignUpForm = (): JSX.Element => {
  const toast = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { register, user } = useAuthContext();

  const loginFormInitValues: UserRegister = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  const {
    control,
    watch,
    handleSubmit: submitConfirm,
    formState: { isValid },
  } = useForm<UserRegister>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    values: loginFormInitValues,
  });

  const isDisableSubmit = !isValid;

  const handleClickShowPassword = useCallback(() => setShowPassword((show) => !show), []);

  const handleSuccess = useCallback(() => {
    router.push(ROUTES.HOME);
  }, [router]);

  const handleError = useCallback(
    (errorMessage: string) => {
      toast.error(errorMessage);
    },
    [toast],
  );

  const handleSubmit: SubmitHandler<UserRegister> = useCallback(
    (values) => {
      register(values, handleSuccess, handleError);
    },
    [handleSuccess, handleError, register],
  );

  useEffect(() => {
    user && router.push(ROUTES.HOME);
  }, [user, router]);

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
          name="confirmPassword"
          control={control}
          rules={{
            validate: {
              ...validations.confirmPassword,
              validateMatched: (value) => validations.confirmPassword.validateMatched(value, watch('password')),
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
          onClick={submitConfirm(handleSubmit)}
        >
          Sign up
        </Button>
      </Stack>
    </Box>
  );
};

export default SignUpForm;
