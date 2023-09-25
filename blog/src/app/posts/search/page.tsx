'use client';
import useSWR from 'swr';
import SearchBar from '../../../components/SearchBar';
import { Filter } from '../../../types/filter';
import { Container, HeaderContainer, HeaderStyled } from './search.styled';
import { API_ENDPOINTS } from '../../../constants/fetch';
import { FETCH_METHODS } from '../../../enums/fetch';
import { FetchService } from '../../../services/fetchApi';
import { useState } from 'react';
import PostList from '../../../components/PostList';

const SearchPage = (): JSX.Element => {
  const [queryParams, setQueryParams] = useState<Filter | null>(null);

  const { data, error, isLoading } = useSWR(
    [API_ENDPOINTS.POSTS, queryParams],
    ([key, params]) => {
      let tagSearch = '';
      let deepSearch = '';
      //&_sort=dateCreated&_order=asc
      if (params && params.tag) {
        tagSearch = `&tag.id=${params.tag.id}`;
      }
      if (params && params.search) {
        deepSearch = `&q=${params.search}`;
      }

      const url = `${key}?${tagSearch}${deepSearch}`;
      let response = FetchService.fetch(url, FETCH_METHODS.SSR);
      return response;
    }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const handleSearch = (data: Filter) => {
    setQueryParams(data);
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderStyled variant="h1">Search</HeaderStyled>
      </HeaderContainer>
      <SearchBar value={queryParams} onSubmit={handleSearch} />
      <PostList data={data} />
    </Container>
  );
};

export default SearchPage;
