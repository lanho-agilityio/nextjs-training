'use client';

import {
  Container,
  CountStyled,
  HeaderContainer,
  HeaderStyled
} from './page.styled';
import PostList from '../../../components/PostList';
import { useEffect } from 'react';
import { usePostContext } from '../../../hooks/usePostContext';

const CategoryPage = ({
  params: { name }
}: {
  params: { name: string };
}): JSX.Element => {
  const { queryPosts, changeParams } = usePostContext();

  useEffect(() => {
    changeParams({
      search: '',
      tag: [
        {
          name: name,
          color: '',
          id: ''
        }
      ]
    });
  }, [changeParams, name]);

  if (queryPosts.error) return <div>failed to load</div>;
  if (queryPosts.isLoading) return <div>loading...</div>;

  return (
    <Container>
      <HeaderContainer>
        <HeaderStyled variant="h1">{name.replace(/%20/g, ' ')}</HeaderStyled>
        <CountStyled variant="body1">
          {queryPosts.data instanceof Error || queryPosts.data === undefined
            ? 0
            : queryPosts.data.length}{' '}
          Articles
        </CountStyled>
      </HeaderContainer>
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

export default CategoryPage;
