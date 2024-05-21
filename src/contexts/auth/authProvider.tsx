'use client';
import { createContext, ReactNode, useCallback, useMemo, useReducer } from 'react';
//Contexts
import authReducer, { USER_ACTION } from './authReducer';

// Models
import { UserLogin, UserRegister, UserSession } from '@/models';

export interface AuthContextType {
  login: (
    values: UserLogin,
    // handleSuccess: (response: UserSession) => void,
    // handleError: (e: unknown) => void
  ) => void;
  logout: () => void;
  user: UserSession | null;
  register: (
    values: UserRegister,
    // handleSuccess: (response: UserSession) => void,
    // handleError: (e: unknown) => void,
  ) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(
    authReducer,
    typeof window !== 'undefined' ? JSON.parse(window.sessionStorage.getItem('user') || 'null') : null,
  );

  const onLogin = useCallback(async (values: UserLogin) => {
    const response = {
      id: 'test',
      username: values.username,
    };
    dispatch({ type: USER_ACTION.SET_USER, payload: response });
    sessionStorage.setItem('user', JSON.stringify(response));
  }, []);

  const onRegister = useCallback(async (values: UserRegister) => {
    console.log(values);
  }, []);

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