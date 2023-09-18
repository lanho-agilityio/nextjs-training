export interface User {
  id: string;
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  imageBase64: string;
  imagePath: string;
}

export type UserLogin = Pick<User, 'email' | 'password'>;

export type UserRegister = Omit<User, 'id'>;

export type UserSession = Omit<User, 'password'>;
