'use client';
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useReducer
} from 'react';
import useSWRMutation from 'swr/mutation';
//Contexts
import authReducer, { USER_ACTION } from './authReducer';
//Constants
import { API_ENDPOINTS } from '@/constants/fetch';
//Types
import { UserLogin, UserRegister, UserSession } from '@/Ttypes/user';
import { AuthContextType } from '@/Ttypes/authContext';
//Services
import { loginUser, registerUser } from '@/services/user';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(
    authReducer,
    typeof window !== 'undefined'
      ? JSON.parse(window.sessionStorage.getItem('user') || 'null')
      : null
  );

  const useLogin = useSWRMutation(API_ENDPOINTS.USERS, loginUser);
  const useRegister = useSWRMutation(API_ENDPOINTS.USERS, registerUser);

  const onLogin = useCallback(
    async (
      values: UserLogin,
      handleSuccess: (response: UserSession) => void,
      handleError: (e: unknown) => void
    ) => {
      await useLogin.trigger(values, {
        onSuccess: (response: UserSession) => {
          dispatch({ type: USER_ACTION.SET_USER, payload: response });
          sessionStorage.setItem('user', JSON.stringify(response));
          handleSuccess(response);
        },
        onError: (e: unknown) => {
          handleError(e);
        },
        throwOnError: false
      });
    },
    [useLogin]
  );

  const onRegister = useCallback(
    async (
      values: UserRegister,
      handleSuccess: (response: UserSession) => void,
      handleError: (e: unknown) => void
    ) => {
      await useRegister.trigger(values, {
        onSuccess: (response: UserSession) => {
          dispatch({ type: USER_ACTION.SET_USER, payload: response });
          sessionStorage.setItem('user', JSON.stringify(response));
          handleSuccess(response);
        },
        onError: (e: unknown) => {
          handleError(e);
        },
        throwOnError: false
      });
    },
    [useRegister]
  );

  const logout = useCallback(() => {
    dispatch({
      type: USER_ACTION.REMOVE_USER
    });

    sessionStorage.removeItem('user');
  }, [dispatch]);

  const value = useMemo(
    () => ({
      user,
      login: onLogin,
      logout,
      register: onRegister
    }),
    [user, logout, onLogin, onRegister]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
