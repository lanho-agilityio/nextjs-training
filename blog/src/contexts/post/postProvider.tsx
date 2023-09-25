import { ReactNode, createContext, useCallback, useReducer } from 'react';
import postReducer from './postReducer';
import useSWRMutation from 'swr/mutation';
import { API_ENDPOINTS } from '../../constants/fetch';
import { createPost, editPost } from '../../services/post';
import { AddPost, EditPost, Post } from '../../types/post';

export const PostContext = createContext(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const useAddPost = useSWRMutation(API_ENDPOINTS.POSTS, createPost);
  const useEditPost = useSWRMutation(API_ENDPOINTS.POSTS, editPost);

  const onAddPost = useCallback(
    async (
      values: AddPost,
      handleSuccess: (response: AddPost) => void,
      handleError: (e: unknown) => void
    ) => {
      await useAddPost.trigger(values, {
        onSuccess: (response: AddPost) => {
          console.log(response);
          handleSuccess(response);
        },
        onError: (e: unknown) => {
          handleError(e);
        },
        throwOnError: false
      });
    },
    [useAddPost]
  );

  const onEditPost = useCallback(
    async (
      values: EditPost,
      handleSuccess: (response: any) => void,
      handleError: (e: unknown) => void
    ) => {
      await useEditPost.trigger(values, {
        onSuccess: (response) => {
          console.log(response);
          handleSuccess(response);
        },
        onError: (e: unknown) => {
          handleError(e);
        },
        throwOnError: false
      });
    },
    [useEditPost]
  );
};
