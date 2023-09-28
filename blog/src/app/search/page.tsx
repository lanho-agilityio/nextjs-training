'use client';
import SearchBar from '../../components/SearchBar';
import { Filter } from '../../types/filter';
import { Container, HeaderContainer, HeaderStyled } from './search.styled';
import { API_ENDPOINTS } from '../../constants/fetch';
import PostList from '../../components/PostList';
import { FetchService } from '../../services/fetchApi';
import { FETCH_METHODS } from '../../enums/fetch';
import { useState } from 'react';
import useSWR from 'swr';

const SearchPage = (): JSX.Element => {
  const [url, setUrl] = useState<string>(
    `${API_ENDPOINTS.POSTS}?&_sort=dateCreated&_order=asc&_expand=user`
  );
  const [params, setParams] = useState<Filter | null>(null);
  const { data, error, isLoading } = useSWR(url, (api) =>
    FetchService.fetch(api, FETCH_METHODS.SSR)
  );

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div
        role="loading"
        className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8"
      >
        <h1 className="text-center animate-pulse">Loading</h1>
      </div>
    );

  const handleSearch = async (data: Filter) => {
    setParams(data);
    let tagSearch = '';
    let userSearch = '';
    let deepSearch = '';
    if (data && data.tags.length > 0) {
      for (let i = 0; i < data.tags.length; i++) {
        tagSearch += `&tag.name=${data.tags[i].name.replace(/%20/g, ' ')}`;
      }
    }
    if (data && data.users.length > 0) {
      for (let i = 0; i < data.users.length; i++) {
        userSearch += `&userId=${data.users[i].id}`;
      }
    }
    if (data && data.search) {
      deepSearch = `&q=${data.search}`;
    }
    const url = `${API_ENDPOINTS.POSTS}?${tagSearch}${userSearch}${deepSearch}&_sort=dateCreated&_order=asc&_expand=user`;
    setUrl(url);
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderStyled variant="h1">Search</HeaderStyled>
      </HeaderContainer>
      <SearchBar value={params} onSubmit={handleSearch} />
      <PostList
        data={data instanceof Error || data === undefined ? [] : data}
      />
    </Container>
  );
};

export default SearchPage;
