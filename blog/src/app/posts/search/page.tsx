'use client';
import useSWR from 'swr';
import SearchBar from '../../../components/SearchBar';
import { Filter } from '../../../types/filter';
import { Container, HeaderContainer, HeaderStyled } from './search.styled';
import { API_ENDPOINTS } from '../../../constants/fetch';
import { useState } from 'react';
import PostList from '../../../components/PostList';
import { queryPosts } from '../../../services/post';

const SearchPage = (): JSX.Element => {
  const [queryParams, setQueryParams] = useState<Filter | null>(null);

  const { data, error, isLoading } = useSWR(
    [API_ENDPOINTS.POSTS, queryParams],
    ([key, params]) => queryPosts([key, params])
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
      <PostList
        data={data instanceof Error || data === undefined ? [] : data}
      />
    </Container>
  );
};

export default SearchPage;
