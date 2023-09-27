'use client';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import PostCard from '../PostCard';
import { Container, PostListStyled } from './PostList.styled';

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
