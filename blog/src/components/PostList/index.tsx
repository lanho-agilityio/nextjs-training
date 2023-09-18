'use client';
import PostCard from '../PostCard';
import { Container, PostListStyled } from './PostList.styled';

const PostList = (): JSX.Element => {
  return (
    <Container>
      <PostListStyled>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostListStyled>
    </Container>
  );
};

export default PostList;
