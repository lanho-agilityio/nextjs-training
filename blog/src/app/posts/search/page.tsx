'use client';
import useSWR from 'swr';
import SearchBar from '../../../components/SearchBar';
import { Filter } from '../../../types/filter';
import { Container, HeaderContainer, HeaderStyled } from './search.styled';
import { API_ENDPOINTS } from '../../../constants/fetch';
import { useState } from 'react';
import PostList from '../../../components/PostList';
import { queryPosts } from '../../../services/post';
import { usePostContext } from '../../../hooks/usePostContext';

const SearchPage = (): JSX.Element => {
  const { queryPosts, params, changeParams } = usePostContext();

  if (queryPosts.error) return <div>failed to load</div>;
  if (queryPosts.isLoading) return <div>loading...</div>;

  const handleSearch = (data: Filter) => {
    changeParams(data);
    queryPosts.mutate(API_ENDPOINTS.POSTS);
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderStyled variant="h1">Search</HeaderStyled>
      </HeaderContainer>
      <SearchBar value={params} onSubmit={handleSearch} />
      <PostList
        data={
          queryPosts.data instanceof Error || queryPosts.data === undefined
            ? []
            : queryPosts.data
        }
      />
    </Container>
  );
};

export default SearchPage;
