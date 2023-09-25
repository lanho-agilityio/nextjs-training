import { useContext } from 'react';
import { AuthContextType } from '../types/authContext';
import { AuthContext } from '../contexts/auth/authProvider';

export const useAuthContext = (): AuthContextType => {
  const authContext = useContext(AuthContext);
  return authContext!;
};
