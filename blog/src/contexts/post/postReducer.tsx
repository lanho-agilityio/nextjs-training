//Types
import {
  AddPost as AddPostPayload,
  EditPost as EditPostPayload,
  Post
} from '@/Ttypes/post';

export enum POST_ACTION {
  ADD_POST = 'ADD_POST',
  EDIT_POST = 'EDIT_POST'
}

interface AddPost {
  type: POST_ACTION.ADD_POST;
  payload: AddPostPayload;
}

interface EditPost {
  type: POST_ACTION.EDIT_POST;
  payload: EditPostPayload;
}

export type PostAction = AddPost | EditPost;

const postReducer = (state: Post[] | null, action: PostAction) => {
  switch (action.type) {
    case POST_ACTION.ADD_POST:
      return {
        ...state,
        ...action.payload
      };
    case POST_ACTION.EDIT_POST:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
