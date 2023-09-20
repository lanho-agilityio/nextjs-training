'use client';
import { Post } from '../../types/post';
import PostCard from '../PostCard';
import { Container, PostListStyled } from './PostList.styled';

export interface PostListProps {
  data: Post[]
}

const PostList = ({data}: PostListProps): JSX.Element => {
  return (
    <Container>
      <PostListStyled>
        {
          data.map((e) => 
            <PostCard key={e.id} data={e}/>
          )
        }
       
      </PostListStyled>
    </Container>
  );
};

export default PostList;
