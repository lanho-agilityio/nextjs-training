'use client';
import { ReactNode, createContext, useCallback, useMemo } from 'react';
import useSWRMutation from 'swr/mutation';
//Constants
import { API_ENDPOINTS } from '@/constants/fetch';
//Services
import { createPost, editPost } from '@/services/post';
//Types
import { AddPost, EditPost } from '@/Ttypes/post';
import { PostContextType } from '@/Ttypes/postContext';

export const PostContext = createContext<PostContextType | null>(null);

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
        onSuccess: (response: any) => {
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

  const value = useMemo(
    () => ({
      add: onAddPost,
      edit: onEditPost
    }),
    [onAddPost, onEditPost]
  );

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
