import { POST_ERRORS } from '../constants/errors';
import { API_ENDPOINTS } from '../constants/fetch';
import { FETCH_METHODS } from '../enums/fetch';
import { toBase64 } from '../helpers/base64pic';
import { AddPost, EditPost, Post } from '../types/post';
import { FetchService } from './fetchApi';
import { findNewTag } from './tag';
import { Filter } from '../types/filter';

export const createPost = async (url: string, { arg }: { arg: AddPost }) => {
  let base64;
  if (arg.imageFile) base64 = await toBase64(arg.imageFile);
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
  let post: Post[] = await FetchService.fetch(
    `${API_ENDPOINTS.POSTS}?id=${arg.id}`,
    FETCH_METHODS.SSR
  );
  if (post.length === 0) throw new Error(POST_ERRORS.POST_NOT_FOUND);
  let base64;
  if (arg.imageFile) base64 = await toBase64(arg.imageFile);
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

export const queryPosts = async ([key, params]: [
  string,
  Filter | null
]): Promise<Post[] | Error> => {
  let tagSearch = '';
  let deepSearch = '';
  if (params && params.tag.length > 0) {
    for (let i = 0; i < params.tag.length; i++) {
      tagSearch += `&tag.name=${params.tag[i].name.replace(/%20/g, ' ')}`;
    }
  }
  if (params && params.search) {
    deepSearch = `&q=${params.search}`;
  }

  const url = `${key}?${tagSearch}${deepSearch}&_sort=dateCreated&_order=asc&_expand=user`;
  let response = await FetchService.fetch(url, FETCH_METHODS.SSR);
  return response;
};
