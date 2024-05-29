'use client';
import { createContext, ReactNode, useCallback, useMemo, useReducer } from 'react';
import { deleteCookie, setCookie } from 'cookies-next';
import { Dialog } from '@mui/material';
import { usePathname } from 'next/navigation';

// APIs
import { loginUser, registerUser } from '@/services';

// Constants
import { ROUTES } from '@/constants';

// Contexts
import authReducer, { USER_ACTION } from './authReducer';

// Components
import { LoginForm } from '@/components';

// Models
import { UserLogin, UserRegister, UserSession } from '@/models';

export interface AuthContextType {
  login: (values: UserLogin, handleSuccess?: () => void, handleError?: (errorMessage: string) => void) => void;
  logout: () => void;
  user: UserSession | null;
  register: (values: UserRegister, handleSuccess?: () => void, handleError?: (errorMessage: string) => void) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AUTHORIZED_ROUTES = [ROUTES.CREATE_POST, ROUTES.EDIT_POST()];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [user, dispatch] = useReducer(
    authReducer,
    typeof window !== 'undefined' ? JSON.parse(window.sessionStorage.getItem('user') || 'null') : null,
  );

  const isOpenLoginDialog = !user && !!AUTHORIZED_ROUTES.find((route) => pathname.includes(route));

  const onLogin = useCallback(
    async (values: UserLogin, handleSuccess?: () => void, handleError?: (errorMessage: string) => void) => {
      const response = await loginUser(values);
      if (response.data) {
        dispatch({ type: USER_ACTION.SET_USER, payload: response.data });
        sessionStorage.setItem('user', JSON.stringify(response.data));
        setCookie('id', response.data.id);
        handleSuccess && handleSuccess();
      }
      if (response.errorMessage) {
        handleError && handleError(response.errorMessage);
      }
    },
    [],
  );

  const onRegister = useCallback(
    async (values: UserRegister, handleSuccess?: () => void, handleError?: (errorMessage: string) => void) => {
      const response = await registerUser(values);
      if (response.data) {
        dispatch({ type: USER_ACTION.SET_USER, payload: response.data });
        sessionStorage.setItem('user', JSON.stringify(response.data));
        setCookie('id', response.data.id);
        handleSuccess && handleSuccess();
      }
      if (response.errorMessage) {
        handleError && handleError(response.errorMessage);
      }
    },
    [],
  );

  const logout = useCallback(() => {
    dispatch({
      type: USER_ACTION.REMOVE_USER,
    });
    deleteCookie('id');

    sessionStorage.removeItem('user');
  }, [dispatch]);

  const value = useMemo(
    () => ({
      user,
      login: onLogin,
      logout,
      register: onRegister,
    }),
    [user, logout, onLogin, onRegister],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
      <Dialog open={isOpenLoginDialog}>
        <LoginForm onSubmit={onLogin} />
      </Dialog>
    </AuthContext.Provider>
  );
};
