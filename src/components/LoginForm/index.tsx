'use client';
import { Stack } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

// Constants
import { COLORS } from '@/constants';

// Components
import { Button, Input } from '../Common';

// Utils
import { validateRequired } from '@/utils';

interface LoginFormValues {
  username: string;
  password: string;
}

const validations = {
  username: {
    required: validateRequired,
  },
  password: {
    requrired: validateRequired,
  },
};

const LoginForm = (): JSX.Element => {
  const loginFormInitValues: LoginFormValues = {
    username: '',
    password: '',
  };

  const {
    control,
    formState: { isValid },
  } = useForm<LoginFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    values: loginFormInitValues,
  });

  const isDisableSubmit = !isValid;

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
            onChange={(event) => {
              onChange(event);
            }}
            errorMessage={error?.message}
            inputProps={{
              sx: {
                fontSize: '16px',
                padding: '5px',
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
            type="password"
            fullWidth
            value={value}
            onChange={(event) => {
              onChange(event);
            }}
            errorMessage={error?.message}
            inputProps={{
              sx: {
                fontSize: '16px',
                padding: '5px',
              },
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
        onClick={() => console.log('Submit')}
      >
        Login
      </Button>
    </Stack>
  );
};

export default LoginForm;
