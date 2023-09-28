import { POST_ERRORS, USER_ERRORS } from '../constants/errors';
import { API_ENDPOINTS } from '../constants/fetch';
import { FETCH_METHODS } from '../enums/fetch';
import { fileToBase64 } from '../helpers/base64pic';
import { AddPost, EditPost, Post } from '../types/post';
import { FetchService } from './fetchApi';
import { findNewTag } from './tag';
import { Filter } from '../types/filter';

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
  const url = `${API_ENDPOINTS.POSTS}?&_expand=user`;
  return await FetchService.fetch(url, FETCH_METHODS.SSR);
};

export const queryPostsByUser = async (userId: string) => {
  const url = `${API_ENDPOINTS.USERS}/${userId}?&_embed=posts`;
  return await FetchService.fetch(url, FETCH_METHODS.SSR);
};

export const queryPostsByCategory = async (categoryName: string) => {
  const url = `${API_ENDPOINTS.POSTS}?&tag.name=${categoryName}&_sort=dateCreated&_order=asc&_expand=user`;
  return await FetchService.fetch(url, FETCH_METHODS.SSR);
};

export const getPostDetail = async (postId: string) => {
  const url = `${API_ENDPOINTS.POSTS}/${postId}?&_expand=user`;
  return await FetchService.fetch(url, FETCH_METHODS.SSR);
};

export const searchPosts = async ([key, params]: [
  string,
  Filter | null
]): Promise<Post[] | Error> => {
  let tagSearch = '';
  let userSearch = '';
  let deepSearch = '';
  if (params && params.tags.length > 0) {
    for (let i = 0; i < params.tags.length; i++) {
      tagSearch += `&tag.name=${params.tags[i].name.replace(/%20/g, ' ')}`;
    }
  }
  if (params && params.users.length > 0) {
    for (let i = 0; i < params.users.length; i++) {
      userSearch += `&userId=${params.users[i].id}`;
    }
  }
  if (params && params.search) {
    deepSearch = `&q=${params.search}`;
  }

  const url = `${key}?${tagSearch}${userSearch}${deepSearch}&_sort=dateCreated&_order=asc&_expand=user`;
  return await FetchService.fetch(url, FETCH_METHODS.SSR);
};
