import { Tag } from '../types/tag';
import { FetchService } from './fetchApi';

export const createTag = async (url: string, { arg }: { arg: Tag }) => {
    console.log(arg)
//   const response = FetchService.post({ arg.id, arg.name, color }, url);
//   return response;
};
