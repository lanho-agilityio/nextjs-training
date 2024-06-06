'use client';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Dialog } from '@mui/material';

// Constants
import { ROUTES } from '@/constants';

// Components
import { LoginForm } from '@/components';

// Hooks
import { useAuthContext } from '@/hooks';

const AUTHORIZED_ROUTES = [ROUTES.UPSERT_POST_BASE];

interface UserAuthorizationWrapperProps {
  children: ReactNode;
}

const UserAuthorizationWrapper = ({ children }: UserAuthorizationWrapperProps): JSX.Element => {
  const pathname = usePathname();
  const { user, login } = useAuthContext();

  const isOpenLoginDialog = !user && !!AUTHORIZED_ROUTES.find((route) => pathname.includes(route));

  return (
    <>
      {children}
      <Dialog open={isOpenLoginDialog}>
        <LoginForm onSubmit={login} />
      </Dialog>
    </>
  );
};

export default UserAuthorizationWrapper;
