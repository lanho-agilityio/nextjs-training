import { useContext } from 'react';
import { AuthContextType } from '../types/auth';
import { AuthContext } from '../contexts/auth/authProvider';

export const useAuthContext = (): AuthContextType => {
  const authContext = useContext(AuthContext);
  return authContext!;
};
