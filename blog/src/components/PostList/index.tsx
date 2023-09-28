'use client';
import { lazy } from 'react';
//Types
import { Post } from '@/Ttypes/post';
import { User } from '@/Ttypes/user';
//Components
import { Container, PostListStyled } from './PostList.styled';
const PostCard = lazy(() => import('@/components/PostCard'));

export interface PostListProps {
  data: Post[];
  user?: User;
}

const PostList = ({ data, user }: PostListProps): JSX.Element => {
  return (
    <Container>
      <PostListStyled>
        {data.map((e) => (
          <PostCard key={e.id} data={e} user={user} />
        ))}
      </PostListStyled>
    </Container>
  );
};

export default PostList;
