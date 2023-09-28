import { UserLogin, UserRegister, UserSession } from '@/Ttypes/user';

export interface AuthContextType {
  login: (
    values: UserLogin,
    handleSuccess: (response: UserSession) => void,
    handleError: (e: unknown) => void
  ) => void;
  logout: () => void;
  user: UserSession | null;
  register: (
    values: UserRegister,
    handleSuccess: (response: UserSession) => void,
    handleError: (e: unknown) => void
  ) => void;
}
