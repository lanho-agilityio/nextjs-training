import { useContext } from 'react';
//Contexts
import { AuthContext } from '@/contexts/auth/authProvider';
//Types
import { AuthContextType } from '@/Ttypes/authContext';

export const useAuthContext = (): AuthContextType => {
  const authContext = useContext(AuthContext);
  return authContext!;
};
