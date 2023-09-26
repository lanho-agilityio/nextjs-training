import { API_ENDPOINTS } from '../constants/fetch';
import { FETCH_METHODS } from '../enums/fetch';
import { Tag } from '../types/tag';
import { FetchService } from './fetchApi';

export const getTags = async (): Promise<Tag[]> => {
  const response = await FetchService.fetch(
    API_ENDPOINTS.TAGS,
    FETCH_METHODS.SSR
  );
  return response;
};

export const createTag = async (url: string, { arg }: { arg: Tag }) => {
  const data: Tag = {
    id: arg.id,
    name: arg.name,
    color: arg.color
  };
  const response = await FetchService.post(data, url);
  return response;
};

export const findNewTag = async (newTag: Tag[]): Promise<Tag[]> => {
  let currentTagList = await getTags();
  let updated: Tag[] = [];
  for (let i = 0; i < newTag.length; i++) {
    if (!currentTagList.find((e) => e.name === newTag[i].name)) {
      updated.push(newTag[i]);
      await createTag(API_ENDPOINTS.TAGS, { arg: newTag[i] });
    }
  }
  return updated;
};
