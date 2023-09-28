//Constants
import { API_ENDPOINTS } from '@/constants/fetch';
//Enums
import { FETCH_METHODS } from '@/enums/fetch';
//Sevices
import { FetchService } from './fetchApi';
//Types
import { Tag } from '@/types/tag';

export const getCategories = async (): Promise<Tag[]> => {
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

export const findNewTag = async (newTag: Tag): Promise<Tag | null> => {
  let currentTagList = await getCategories();
  if (!currentTagList.find((e) => e.name === newTag.name)) {
    return await createTag(API_ENDPOINTS.TAGS, { arg: newTag });
  }
  return null;
};
