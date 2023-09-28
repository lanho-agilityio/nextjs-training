import { v4 as uuidv4 } from 'uuid';
import sha256 from 'crypto-js/sha256';
//Constants
import { API_ENDPOINTS } from '@/constants/fetch';
import { USER_ERRORS } from '@/constants/errors';
//Enums
import { FETCH_METHODS } from '@/enums/fetch';
//Services
import { FetchService } from './fetchApi';
//Types
import { User, UserLogin, UserRegister, UserSession } from '@/Ttypes/user';

const checkUserExisted = async (
  url: string,
  email: string
): Promise<boolean> => {
  const api = `${url}?email=${email}`;
  const existed: User[] = await FetchService.fetch(api, FETCH_METHODS.SSR);
  if (existed.length > 0) return true;
  return false;
};

const hashPassword = (password: string) => {
  return sha256(password).toString();
};

const verifyAccount = async (
  url: string,
  params: UserLogin
): Promise<User[]> => {
  const hashedPw = hashPassword(params.password);
  const api = `${url}?email=${params.email}&password=${hashedPw}`;
  const verified: User[] = await FetchService.fetch(api, FETCH_METHODS.SSR);
  if (verified.length > 0) return verified;
  throw new Error(USER_ERRORS.INCORRECT_INFO);
};

export const registerUser = async (
  url: string,
  { arg }: { arg: UserRegister }
) => {
  const existed: boolean = await checkUserExisted(url, arg.email);
  if (!existed) {
    const response = await FetchService.post(
      {
        name: arg.name,
        email: arg.email,
        password: hashPassword(arg.password),
        id: uuidv4()
      },
      url
    );
    return response;
  }
  throw new Error(USER_ERRORS.USER_EXISTED);
};

export const loginUser = async (url: string, { arg }: { arg: UserLogin }) => {
  const verified = await verifyAccount(url, arg);
  const response: UserSession = {
    id: verified[0].id,
    name: verified[0].name,
    email: verified[0].email
  };
  return response;
};

export const queryAllUsers = async () => {
  const url = `${API_ENDPOINTS.USERS}`;
  return await FetchService.fetch(url, FETCH_METHODS.SSR);
};
