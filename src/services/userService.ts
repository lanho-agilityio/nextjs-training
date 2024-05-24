'use server';
import { revalidateTag } from 'next/cache';
import { v4 as uuidv4 } from 'uuid';
import sha256 from 'crypto-js/sha256';

// APIs
import { APIs } from './requestAPI';

// Constants
import { API_ROUTES, ERROR_MESSAGES, VALIDATE_TAGS } from '@/constants';

// Models
import { User, UserLogin, UserRegister, UserSession } from '@/models';

const hashPassword = (password: string) => {
  return sha256(password).toString();
};

const checkUserExisted = async (username: string): Promise<boolean> => {
  const url = `${API_ROUTES.USER}?username=${username}`;
  const response = await APIs.get<User[]>(url, VALIDATE_TAGS.USERS).catch((error) => {
    throw new Error(error || ERROR_MESSAGES.DEFAULT_API_ERROR);
  });
  if (response.total > 0) {
    return true;
  }
  return false;
};

const verifyUser = async (params: UserLogin): Promise<User> => {
  const hashedPw = hashPassword(params.password);
  const api = `${API_ROUTES.USER}?username=${params.username}&password=${hashedPw}`;
  const { data: users, total } = await APIs.get<User[]>(api).catch((error) => {
    throw new Error(error || ERROR_MESSAGES.DEFAULT_API_ERROR);
  });
  if (total > 0) {
    return users[0];
  }
  throw new Error(ERROR_MESSAGES.USER_NOT_FOUND);
};

export const loginUser = async (arg: UserLogin) => {
  try {
    const verified = await verifyUser(arg);
    const response: UserSession = {
      id: verified.id,
      username: verified.username,
    };
    return {
      data: response,
      errorMessage: '',
    };
  } catch (error) {
    const errorMessage = (error as Error).message;
    return {
      data: null,
      errorMessage,
    };
  }
};

export const registerUser = async (arg: UserRegister) => {
  try {
    const existed = await checkUserExisted(arg.username);
    if (!existed) {
      const response = await APIs.post<UserSession>(
        API_ROUTES.USER,
        {
          id: uuidv4(),
          username: arg.username,
          password: hashPassword(arg.password),
        },
      );

      revalidateTag(VALIDATE_TAGS.USERS)

      return {
        data: response,
        errorMessage: '',
      };
    }
    throw new Error(ERROR_MESSAGES.USER_EXISTED);
  } catch (error) {
    const errorMessage = (error as Error).message;
    return {
      data: null,
      errorMessage,
    };
  }
};
