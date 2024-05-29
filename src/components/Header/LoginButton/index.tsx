'use client';
import { memo, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import { Popover } from '@mui/material';

// Components
import { LinkButton, LoginSkeleton } from '@/components';

// Models
import { UserLogin } from '@/models';

const LoginForm = dynamic(() => import('../../LoginForm'), {
  loading: () => <LoginSkeleton />,
});

interface LoginButtonProps {
  onSubmit: (values: UserLogin) => void;
}

const LoginButton = ({ onSubmit }: LoginButtonProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpenLogin = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleCloseLogin = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? 'login-popover' : undefined;

  return (
    <>
      <LinkButton
        onClick={handleOpenLogin}
        sx={{ padding: 0, paddingTop: '4px', height: { xs: '18px', sm: '18px', md: 'inherit' } }}
      >
        Sign in
      </LinkButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseLogin}
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
        <LoginForm onSubmit={onSubmit} onRedirectSignup={handleCloseLogin} />
      </Popover>
    </>
  );
};

export default memo(LoginButton);
