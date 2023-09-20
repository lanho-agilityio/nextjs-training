import { API_ENDPOINTS } from '../constants/fetch';
import { FETCH_METHODS } from '../enums/fetch';
import { Tag } from '../types/tag';
import { FetchService } from './fetchApi';

export const createTag = async (url: string, { arg }: { arg: Tag }) => {
    const data: Tag = {
        id: arg.id,
        name: arg.name,
        color: arg.color
    }
    const response = FetchService.post(data, url);
    return response;
};

export const getTag = async (): Promise<Tag[]> => {
  const response = await FetchService.fetch(
    API_ENDPOINTS.TAGS,
    FETCH_METHODS.ISR
  );
  return response;
};

export const findNewTag = async (addedTagList: Tag[]): Promise<Tag[]> => {
    let currentTagList = await getTag()
    let tagList: Tag[] = [];
    addedTagList.forEach(async element => {
        if(!currentTagList.find(e => e.name === element.name)){
            tagList.push(element)
        }
    })
    const updated = await updateNewTags(tagList);
    console.log(updated)
    return updated;
}

export const updateNewTags = async (tagList: Tag[]): Promise<Tag[]> => {
    tagList.forEach(async element => {
        await createTag(API_ENDPOINTS.TAGS, {arg: element})
    })
    return tagList;
}   