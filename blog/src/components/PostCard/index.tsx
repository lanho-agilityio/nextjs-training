'use client';
import { lazy } from 'react';
//Types
import { Post } from '@/Ttypes/post';
import { User } from '@/Ttypes/user';
//Components
import { CardStyled, TagContainer } from './PostCard.styled';
const Tag = lazy(() => import('@/components/Tag'));
const CardTitle = lazy(() => import('@/components/CardTitle'));
const CardImage = lazy(() => import('@/components/CardImage'));
const CardFooter = lazy(() => import('@/components/CardFooter'));

export interface PostCardProps {
  data: Post;
  user?: User;
}

const PostCard = ({ data, user }: PostCardProps): JSX.Element => {
  return (
    <CardStyled>
      <CardImage imagePath={data.imageBase64} href={`/post/${data.id}`} />
      <TagContainer>
        {data.tag && (
          <Tag
            key={data.tag.id}
            title={data.tag.name}
            color={data.tag.color}
            href={`/category/${data.tag.name}`}
          />
        )}
      </TagContainer>
      <CardTitle title={data.title} href={`/post/${data.id}`} />
      <CardFooter
        author={data.user || user}
        time={new Date(data.dateCreated).toDateString()}
        postId={data.id}
      />
    </CardStyled>
  );
};

export default PostCard;
