import { UserSession } from '../../types/user';

export enum USER_ACTION {
  SET_USER = 'SET_USER',
  REMOVE_USER = 'REMOVE_USER'
}

interface SetUser {
  type: USER_ACTION.SET_USER;
  payload: UserSession;
}

interface RemoveUser {
  type: USER_ACTION.REMOVE_USER;
}

export type UserAction = SetUser | RemoveUser;

const authReducer = (state: UserSession | null, action: UserAction) => {
  switch (action.type) {
    case USER_ACTION.SET_USER:
      return {
        ...state,
        ...action.payload
      };
    case USER_ACTION.REMOVE_USER:
      return null;
    default:
      return state;
  }
};

export default authReducer;
