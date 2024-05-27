'use client';
import { memo, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { Box, Container, Popover, Typography } from '@mui/material';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { LinkButton } from '../../Common/Button';
import { LoginSkeleton } from '../../Skeletons';

// Models
import { UserLogin } from '@/models';

const LoginForm = dynamic(() => import('../../LoginForm'), {
  ssr: false,
  loading: () => <LoginSkeleton />,
});

interface LoginButtonProps {
  onSubmit: (values: UserLogin) => void;
}

const LoginButton = ({ onSubmit }: LoginButtonProps): JSX.Element => {
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleRedirectSignup = useCallback(() => {
    push(ROUTES.SIGN_UP);
    handleClose();
  }, [handleClose, push]);

  const open = Boolean(anchorEl);
  const id = open ? 'login-popover' : undefined;

  return (
    <>
      <LinkButton onClick={handleClick} sx={{ padding: 0, paddingTop: '4px' }}>
        Sign in
      </LinkButton>
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
        sx={{
          borderRadius: '6px',
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
            <LinkButton onClick={handleRedirectSignup} sx={{ color: COLORS.NAV_LINK_HOVER }}>
              Sign up
            </LinkButton>
          </Box>
        </Container>
      </Popover>
      {/* <Backdrop open={open} onClick={handleClose} sx={{ zIndex: 3 }} /> */}
    </>
  );
};

export default memo(LoginButton);
