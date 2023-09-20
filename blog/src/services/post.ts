import { toBase64 } from '../helpers/base64pic';
import { AddPost } from '../types/post';
import { FetchService } from './fetchApi';
import { updateNewTag } from './tag';

export const createPost = async (url: string, { arg }: { arg: AddPost }) => {
  let base64;
  if (arg.imageFile) base64 = await toBase64(arg.imageFile);
  const data = {
    id: new Date().getTime().toString(),
    userId: 1,
    title: arg.title,
    content: arg.content,
    imageBase64: base64 ?? '',
    tag: arg.tag,
    dateCreated: new Date()
  };
  if (arg.tag) await updateNewTag(arg.tag);
  const response = await FetchService.post(data, url);
  return response;
};
