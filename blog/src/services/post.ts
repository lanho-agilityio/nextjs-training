//Constants
import { POST_ERRORS, USER_ERRORS } from '@/constants/errors';
import { API_ENDPOINTS, INCLUDE_USER, SORT, WITH_POSTS } from '@/constants/fetch';
//Enums
import { FETCH_METHODS } from '@/enums/fetch';
//Helpers
import { fileToBase64 } from '@/helpers/base64pic';
//Services
import { findNewTag } from '@/services/tag';
import { FetchService } from '@/services/fetchApi';
//Types
import { AddPost, EditPost, Post } from '@/Ttypes/post';

export const createPost = async (url: string, { arg }: { arg: AddPost }) => {
  if (!arg.userId) throw new Error(USER_ERRORS.MISSING_INFO);
  let base64;
  if (arg.imageFile) base64 = await fileToBase64(arg.imageFile);
  const data = {
    id: new Date().getTime().toString(),
    userId: arg.userId,
    title: arg.title,
    content: arg.content,
    imageBase64: base64 ?? '',
    imageName: arg.imageFile?.name ?? '',
    tag: arg.tag,
    dateCreated: new Date()
  };
  if (arg.tag) await findNewTag(arg.tag);
  const response = await FetchService.post(data, url);
  return response;
};

export const editPost = async (url: string, { arg }: { arg: EditPost }) => {
  if (!arg.userId) throw new Error(USER_ERRORS.MISSING_INFO);
  const post: Post = await getPostDetail(arg.id);
  if (!post) throw new Error(POST_ERRORS.POST_NOT_FOUND);
  let base64;
  if (arg.imageFile) base64 = await fileToBase64(arg.imageFile);
  const data = {
    id: arg.id,
    userId: arg.userId,
    title: arg.title,
    content: arg.content,
    imageBase64: base64 ?? '',
    imageName: arg.imageFile?.name ?? '',
    tag: arg.tag,
    dateCreated: new Date()
  };
  if (arg.tag) await findNewTag(arg.tag);
  const response = await FetchService.put(arg.id, url, data);
  return response;
};

export const queryAllPosts = async () => {
  const url = `${API_ENDPOINTS.POSTS}?${INCLUDE_USER}`;
  return await FetchService.fetch(url, FETCH_METHODS.SSR);
};

export const queryPostsByUser = async (userId: string) => {
  const url = `${API_ENDPOINTS.USERS}/${userId}?${WITH_POSTS}`;
  return await FetchService.fetch(url, FETCH_METHODS.SSR);
};

export const queryPostsByCategory = async (categoryName: string) => {
  const url = `${API_ENDPOINTS.POSTS}?&tag.name=${categoryName}${SORT}${INCLUDE_USER}`;
  return await FetchService.fetch(url, FETCH_METHODS.SSR);
};

export const getPostDetail = async (postId: string) => {
  const url = `${API_ENDPOINTS.POSTS}/${postId}?${INCLUDE_USER}`;
  return await FetchService.fetch(url, FETCH_METHODS.SSR);
};