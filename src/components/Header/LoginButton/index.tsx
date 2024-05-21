'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Container, Popover, Typography } from '@mui/material';

// Constants
import { ROUTES } from '@/constants';

// Components
import LoginForm from '../../LoginForm';
import { LinkButton } from '../../Common/Button';

// Models
import { UserLogin } from '@/models';

interface LoginButtonProps {
  onSubmit: (values: UserLogin) => void;
}

const LoginButton = ({ onSubmit }: LoginButtonProps): JSX.Element => {
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirectSignup = () => {
    push(ROUTES.SIGN_UP);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'login-popover' : undefined;

  return (
    <>
      <LinkButton onClick={handleClick}>Sign in</LinkButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Container sx={{ minHeight: '200px', paddingY: '25px' }}>
          <Typography sx={{ textAlign: 'center', fontSize: '20px', paddingBottom: '10px' }} variant="h1">
            Sign in
          </Typography>
          <LoginForm onSubmit={onSubmit} />
          <Box
            sx={{
              paddingTop: '15px',
              fontSize: '12px',
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>Need an account?</Typography>
            <LinkButton onClick={handleRedirectSignup}>Sign up</LinkButton>
          </Box>
        </Container>
      </Popover>
      {/* <Backdrop open={open} onClick={handleClose} sx={{ zIndex: 3 }} /> */}
    </>
  );
};

export default LoginButton;
