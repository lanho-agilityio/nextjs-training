'use client';
import { MOCK_POST } from '../../mocks/post';
import { CardStyled, TagContainer } from './PostCard.styled';
import CardTag from '../CardTag';
import CardTitle from '../CardTitle';
import CardPicture from '../CardImage';
import CardFooter from '../CardFooter';

const PostCard = (): JSX.Element => {
  const post = MOCK_POST;
  return (
    <CardStyled>
      <CardPicture imagePath={post.imagePath} href={'/'} />
      <TagContainer>
        {post.tags.map((e, i) => {
          return <CardTag key={i} title={e.name} color={e.color} href={'/'} />;
        })}
      </TagContainer>
      <CardTitle title={post.title} href={'/'} />
      <CardFooter />
    </CardStyled>
  );
};

export default PostCard;
