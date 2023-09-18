'use client';

import {
  Container,
  CountStyled,
  HeaderContainer,
  HeaderStyled
} from './page.styled';
import PostList from '../../../components/PostList';

const CategoryPage = ({
  params: { id }
}: {
  params: { id: string };
}): JSX.Element => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderStyled variant="h1">{id.replace(/%20/g, ' ')}</HeaderStyled>
        <CountStyled variant="body1">5 Articles</CountStyled>
      </HeaderContainer>
      <PostList />
    </Container>
  );
};

export default CategoryPage;
