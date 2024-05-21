export interface User {
    id: string;
    username: string;
    password: string;
    confirmPassword?: string;
  }
  
  export type UserLogin = Pick<User, 'username' | 'password'>;
  
  export type UserRegister = Omit<User, 'id'>;
  
  export type UserSession = Omit<User, 'password'>;
  