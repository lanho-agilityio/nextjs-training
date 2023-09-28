'use client';
import { lazy, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
//Constants
import {
  INVALID_EMAIL,
  INVALID_PASSWORD,
  MATCHING_PASSWORD,
  REGEX_EMAIL,
  REQUIRED
} from '@/constants/form';
//Hooks
import { useAuthContext } from '@/hooks/useAuthContext';
//Types
import { UserRegister } from '@/Ttypes/user';
//Components
import {
  Alert,
  FormControl,
  Link,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import {
  Container,
  FormContainer,
  HeaderContainer,
  HeaderStyled
} from './register.styled';
const Button = lazy(() => import('@/components/Button'));

const RegisterPage = (): JSX.Element => {
  const {
    formState: { errors },
    handleSubmit,
    control,
    getValues
  } = useForm<UserRegister>({
    values: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onBlur'
  });

  const { register } = useAuthContext();
  const router = useRouter();

  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleSuccess = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleError = useCallback((e: unknown) => {
    const error = e as Error;
    setMessage(error.message);
    setOpenSnackbar(true);
  }, []);

  const onSubmitForm: SubmitHandler<UserRegister> = (data) => {
    register(data, handleSuccess, handleError);
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
                placeholder="Name*"
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
                placeholder="Confirm Password*"
                {...field}
              />
            </FormControl>
          )}
        />
        <Button type="submit" sx={{ marginTop: '1rem' }}>
          Register
        </Button>
      </FormContainer>
      <Snackbar open={openSnackbar} autoHideDuration={6000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RegisterPage;
