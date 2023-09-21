'use client';
import {
  Container,
  FormContainer,
  HeaderContainer,
  HeaderStyled
} from './login.styled';
import { Controller, SubmitHandler, set, useForm } from 'react-hook-form';
import { INVALID_EMAIL, REGEX_EMAIL, REQUIRED } from '../../../constants/form';
import { FormControl, Link, TextField, Typography } from '@mui/material';

import Button from '../../../components/Button';

import { UserLogin } from '../../../types/user';
import useSWRMutation from 'swr/mutation';
import { API_ENDPOINTS } from '../../../constants/fetch';
import { loginUser } from '../../../services/user';

const LoginPage = (): JSX.Element => {
  const {
    formState: { errors },
    handleSubmit,
    control
  } = useForm<UserLogin>({
    values: {
      email: '',
      password: ''
    },
    mode: 'onBlur'
  });

  const { trigger } = useSWRMutation(API_ENDPOINTS.USERS, loginUser);

  const onSubmitForm: SubmitHandler<UserLogin> = async (data) => {
    await trigger(data);
    // console.log(data);
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderStyled variant="h1">Login</HeaderStyled>
        <Typography fontSize={14}>Don&lsquo;t have an account?</Typography>
        <Link href="/user/register">
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              paddingBottom: '2rem'
            }}
          >
            Register Now
          </Typography>
        </Link>
      </HeaderContainer>
      <FormContainer onSubmit={handleSubmit(onSubmitForm)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: { value: true, message: REQUIRED },
            pattern: { value: REGEX_EMAIL, message: INVALID_EMAIL }
          }}
          render={({ field }) => (
            <FormControl fullWidth sx={{ paddingBottom: '1rem' }}>
              <TextField
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
                variant="outlined"
                type="text"
                placeholder="Email*"
                {...field}
              />
            </FormControl>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: { value: true, message: REQUIRED } }}
          render={({ field }) => (
            <FormControl fullWidth sx={{ paddingBottom: '1rem' }}>
              <TextField
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
                variant="outlined"
                type="password"
                placeholder="Password*"
                {...field}
              />
            </FormControl>
          )}
        />
        <Button type="submit" sx={{ marginTop: '1rem' }}>
          Login
        </Button>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;