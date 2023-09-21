import { User, UserLogin, UserRegister, UserSession } from '../types/user';

import { v4 as uuidv4 } from 'uuid';
import sha256 from 'crypto-js/sha256';
import { FetchService } from './fetchApi';
import { FETCH_METHODS } from '../enums/fetch';
import { API_ENDPOINTS } from '../constants/fetch';
import { USER_ERRORS } from '../constants/errors';

const checkUserExisted = async (email: string): Promise<boolean> => {
  const url = `${API_ENDPOINTS.USERS}?email=${email}`;
  const existed: User[] = await FetchService.fetch(url, FETCH_METHODS.SSR);
  if (existed.length > 0) return true;
  return false;
};

const hashPassword = (password: string) => {
  return sha256(password).toString();
};

const verifyAccount = async (params: UserLogin): Promise<User[]> => {
  const hashedPw = hashPassword(params.password);
  const url = `${API_ENDPOINTS.USERS}?email=${params.email}&password=${hashedPw}`;
  const verified: User[] = await FetchService.fetch(url, FETCH_METHODS.SSR);
  if (verified.length > 0) return verified;
  throw new Error(USER_ERRORS.INCORRECT_INFO);
};

export const registerUser = async (params: UserRegister) => {
  try {
    const existed: boolean = await checkUserExisted(params.email);
    if (!existed) {
      const url = `${API_ENDPOINTS.USERS}`;
      const response = await FetchService.post(
        {
          name: params.name,
          email: params.email,
          password: hashPassword(params.password),
          id: uuidv4()
        },
        url
      );
      return response;
    }
    throw new Error(USER_ERRORS.USER_EXISTED);
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (params: UserLogin) => {
  try {
    const verified = await verifyAccount(params);
    const response: UserSession = {
      id: verified[0].id,
      name: verified[0].name,
      email: verified[0].email
    };
    return response;
  } catch (error) {
    throw error;
  }
};
