'use client';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// Constants
import { COLORS, ROUTES, SUCCESS_MESSAGES } from '@/constants';

// Components
import { Button, Input } from '../Common';

// Hooks
import { useToast } from '../Toast';

// Models
import { UserLogin } from '@/models';

// Utils
import { validateRequired } from '@/utils';
import { LinkButton } from '../Common/Button';

const validations = {
  username: {
    required: validateRequired,
  },
  password: {
    requrired: validateRequired,
  },
};

interface LoginFormProps {
  onSubmit: (values: UserLogin, handleSuccess?: () => void, handleError?: (errorMessage: string) => void) => void;
  onRedirectSignup?: () => void;
}

const LoginForm = ({ onSubmit, onRedirectSignup }: LoginFormProps): JSX.Element => {
  const { push } = useRouter();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loginFormInitValues: UserLogin = {
    username: '',
    password: '',
  };

  const {
    control,
    handleSubmit: submitConfirm,
    formState: { isValid },
  } = useForm<UserLogin>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    values: loginFormInitValues,
  });

  const isDisableSubmit = !isValid;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSuccess = useCallback(() => {
    toast.success(SUCCESS_MESSAGES.LOGIN_SUCCESS);
    setErrorMessage('');
  }, [toast]);

  const handleError = useCallback((errorMessage: string) => {
    setErrorMessage(errorMessage);
  }, []);

  const handleSubmit: SubmitHandler<UserLogin> = useCallback(
    (values) => {
      onSubmit(values, handleSuccess, handleError);
    },
    [onSubmit, handleSuccess, handleError],
  );

  const handleRedirectSignup = useCallback(() => {
    push(ROUTES.SIGN_UP);
    onRedirectSignup && onRedirectSignup();
  }, [push, onRedirectSignup]);

  return (
    <Container sx={{ minHeight: '200px', paddingY: '25px' }}>
      <Typography sx={{ textAlign: 'center', fontSize: '20px', paddingBottom: '10px' }} variant="h1">
        Sign in
      </Typography>
      <Stack rowGap="5px">
        <Controller
          name="username"
          control={control}
          rules={{
            validate: validations.username,
          }}
          render={({ field: { onChange, value, ...rest }, fieldState: { error } }) => (
            <Input
              sx={{ paddingBottom: error?.message ? '0px ' : '20px' }}
              placeholder="Username"
              fullWidth
              value={value}
              onChange={onChange}
              errorMessage={error?.message}
              inputProps={{
                sx: {
                  fontSize: '16px',
                  padding: '7px',
                  marginLeft: '10px',
                },
              }}
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
              sx={{ paddingBottom: error?.message ? '0px ' : '20px' }}
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              value={value}
              onChange={onChange}
              errorMessage={error?.message}
              inputProps={{
                sx: {
                  fontSize: '16px',
                  padding: '7px',
                  marginLeft: '10px',
                },
              }}
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
          height="40px"
          fullWidth
          disabled={isDisableSubmit}
          onClick={submitConfirm(handleSubmit)}
        >
          Login
        </Button>
        <Typography
          sx={{
            paddingTop: errorMessage ? 0 : '18px',
            fontSize: '12px',
            color: COLORS.ERROR,
          }}
        >
          {errorMessage}
        </Typography>
      </Stack>
      <Typography variant="caption">Need an account?</Typography>
      <LinkButton onClick={handleRedirectSignup} sx={{ color: COLORS.NAV_LINK_HOVER }}>
        Sign up
      </LinkButton>
    </Container>
  );
};

export default LoginForm;
