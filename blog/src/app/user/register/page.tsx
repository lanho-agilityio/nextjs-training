'use client';
import {
  Container,
  FormContainer,
  HeaderContainer,
  HeaderStyled
} from './register.styled';
import { Controller, SubmitHandler, set, useForm } from 'react-hook-form';
import {
  INVALID_EMAIL,
  INVALID_PASSWORD,
  MATCHING_PASSWORD,
  REGEX_EMAIL,
  REQUIRED
} from '../../../constants/form';
import { FormControl, Link, TextField, Typography } from '@mui/material';

import Button from '../../../components/Button';

import { UserRegister } from '../../../types/user';

const LoginPage = (): JSX.Element => {
  const {
    formState: { errors },
    handleSubmit,
    control,
    getValues
  } = useForm<UserRegister>({
    mode: 'onBlur'
  });

  //   const { trigger } = useSWRMutation(API_ENDPOINTS.POSTS, createPost);

  const onSubmitForm: SubmitHandler<UserRegister> = async (data) => {
    // await trigger(data);
    console.log(data);
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderStyled variant="h1">Register</HeaderStyled>
        <Typography fontSize={14}> Already have an account?</Typography>
        <Link href="/user/login">
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              paddingBottom: '2rem'
            }}
          >
            Login now
          </Typography>
        </Link>
      </HeaderContainer>

      <FormContainer onSubmit={handleSubmit(onSubmitForm)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: { value: true, message: REQUIRED } }}
          render={({ field }) => (
            <FormControl fullWidth sx={{ paddingBottom: '1rem' }}>
              <TextField
                error={!!errors.name}
                helperText={errors.name && errors.name.message}
                variant="outlined"
                type="text"
                placeholder="First name"
                {...field}
              />
            </FormControl>
          )}
        />
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
                placeholder="Email"
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
                placeholder="Password"
                {...field}
              />
            </FormControl>
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: REQUIRED },
            minLength: { value: 3, message: INVALID_PASSWORD },
            validate: (value) => {
              return value === getValues().password || MATCHING_PASSWORD;
            }
          }}
          render={({ field }) => (
            <FormControl fullWidth sx={{ paddingBottom: '1rem' }}>
              <TextField
                error={!!errors.confirmPassword}
                helperText={
                  errors.confirmPassword && errors.confirmPassword.message
                }
                variant="outlined"
                type="password"
                placeholder="Confirm Password"
                {...field}
              />
            </FormControl>
          )}
        />
        <Button type="submit" sx={{ marginTop: '1rem' }}>
          Register
        </Button>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
