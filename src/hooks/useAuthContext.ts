import { useContext } from 'react';
// Contexts
import { AuthContext, AuthContextType } from '@/contexts/auth/authProvider';

export const useAuthContext = (): AuthContextType => {
  const authContext = useContext(AuthContext);
  return authContext!;
};
