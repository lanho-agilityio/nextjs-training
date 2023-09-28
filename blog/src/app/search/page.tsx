'use client';
import { lazy, useState } from 'react';
import useSWR from 'swr';
//Constants and Enums
import { API_ENDPOINTS, INCLUDE_USER, SORT } from '@/constants/fetch';
import { FETCH_METHODS } from '@/enums/fetch';
//Helpers
import { generateSearchParams } from '@/helpers/api';
//Types
import { Filter } from '@/Ttypes/filter';
//Services
import { FetchService } from '@/services/fetchApi';
//Components
import { Container, HeaderContainer, HeaderStyled } from './search.styled';
const SearchBar = lazy(() => import('@/components/SearchBar'));
const PostList = lazy(() => import('@/components/PostList'));
const Loading = lazy(() => import('@/components/Loading'));

const SearchPage = (): JSX.Element => {
  const [url, setUrl] = useState<string>(
    `${API_ENDPOINTS.POSTS}?${SORT}${INCLUDE_USER}`
  );
  const [params, setParams] = useState<Filter | null>(null);
  const { data, error, isLoading } = useSWR(url, (api) =>
    FetchService.fetch(api, FETCH_METHODS.SSR)
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return (<Loading/>);

  const handleSearch = async (data: Filter) => {
    setParams(data);
    const searchParams = generateSearchParams(data)
    const url = `${API_ENDPOINTS.POSTS}?${searchParams}${SORT}${INCLUDE_USER}`;
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
