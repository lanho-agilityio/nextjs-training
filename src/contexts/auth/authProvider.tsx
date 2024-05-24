'use client';
import { createContext, ReactNode, useCallback, useMemo, useReducer } from 'react';

// APIs
import { loginUser, registerUser } from '@/services';

// Contexts
import authReducer, { USER_ACTION } from './authReducer';

// Models
import { UserLogin, UserRegister, UserSession } from '@/models';

export interface AuthContextType {
  login: (values: UserLogin, handleSuccess?: () => void, handleError?: (errorMessage: string) => void) => void;
  logout: () => void;
  user: UserSession | null;
  register: (values: UserRegister, handleSuccess?: () => void, handleError?: (errorMessage: string) => void) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(authReducer, JSON.parse(sessionStorage.getItem('user') || 'null'));

  const onLogin = useCallback(
    async (values: UserLogin, handleSuccess?: () => void, handleError?: (errorMessage: string) => void) => {
      const response = await loginUser(values);
      if (response.data) {
        dispatch({ type: USER_ACTION.SET_USER, payload: response.data });
        sessionStorage.setItem('user', JSON.stringify(response.data));
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
