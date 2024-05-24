'use client';
import { useCallback, useState } from 'react';
import { IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// Constants
import { COLORS } from '@/constants';

// Components
import { Button, Input } from '../Common';

// Models
import { UserLogin } from '@/models';

// Utils
import { validateRequired } from '@/utils';

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
}

const LoginForm = ({ onSubmit }: LoginFormProps): JSX.Element => {
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
    setErrorMessage('');
  }, []);

  const handleError = useCallback((errorMessage: string) => {
    setErrorMessage(errorMessage);
  }, []);

  const handleSubmit: SubmitHandler<UserLogin> = useCallback(
    (values) => {
      onSubmit(values, handleSuccess, handleError);
    },
    [onSubmit, handleSuccess, handleError],
  );

  return (
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
          paddingTop: errorMessage? 0: '18px',
          fontSize: '12px',
          color: COLORS.ERROR
        }}
      >
        {errorMessage}
      </Typography>
    </Stack>
  );
};

export default LoginForm;
