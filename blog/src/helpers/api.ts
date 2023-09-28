import { Filter } from '@/Ttypes/filter';

export const generateSearchParams = (filter: Filter) => {
  let tagSearch = '';
  let userSearch = '';
  let deepSearch = '';
  if (filter && filter.tags.length > 0) {
    for (let i = 0; i < filter.tags.length; i++) {
      tagSearch += `&tag.name=${filter.tags[i].name.replace(/%20/g, ' ')}`;
    }
  }
  if (filter && filter.users.length > 0) {
    for (let i = 0; i < filter.users.length; i++) {
      userSearch += `&userId=${filter.users[i].id}`;
    }
  }
  if (filter && filter.search) {
    deepSearch = `&q=${filter.search}`;
  }
  return `${tagSearch}${userSearch}${deepSearch}`;
};
