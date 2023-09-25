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

export const updateNewTag = async (newTag: Tag): Promise<Tag | null> => {
  let currentTagList = await getTags();
  let updated: Tag | null = null;
  if (!currentTagList.find((e) => e.name === newTag.name)) {
    updated = await createTag(API_ENDPOINTS.TAGS, { arg: newTag });
    return updated;
  }
  return updated;
};
