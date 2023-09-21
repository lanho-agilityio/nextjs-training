'use client';

import {
  Container,
  CountStyled,
  HeaderContainer,
  HeaderStyled
} from './page.styled';
import PostList from '../../../components/PostList';
import { API_ENDPOINTS } from '../../../constants/fetch';
import { FETCH_METHODS } from '../../../enums/fetch';
import useSWR from 'swr';
import { FetchService } from '../../../services/fetchApi';

const CategoryPage = ({
  params: { id }
}: {
  params: { id: string };
}): JSX.Element => {
  const { data, error, isLoading } = useSWR(
    `${API_ENDPOINTS.POSTS}?tag.name=${id.replace(/%20/g, ' ')}`,
    (url) => FetchService.fetch(url, FETCH_METHODS.SSR)
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Container>
      <HeaderContainer>
        <HeaderStyled variant="h1">{id.replace(/%20/g, ' ')}</HeaderStyled>
        <CountStyled variant="body1">5 Articles</CountStyled>
      </HeaderContainer>
      <PostList data={data} />
    </Container>
  );
};

export default CategoryPage;
