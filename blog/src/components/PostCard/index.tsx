'use client';
import { MOCK_POST } from '../../mocks/post';
import { CardStyled, TagContainer } from './PostCard.styled';
import CardTag from '../CardTag';
import CardTitle from '../CardTitle';
import CardPicture from '../CardImage';
import CardFooter from '../CardFooter';
import { MOCK_AUTHOR } from '../../mocks/author';

const PostCard = (): JSX.Element => {
  const post = MOCK_POST;
  const author = MOCK_AUTHOR;

  return (
    <CardStyled>
      <CardPicture imagePath={post.imagePath} href={'/'} />
      <TagContainer>
        {post.tags.map((e, i) => {
          return (
            <CardTag
              key={i}
              title={e.name}
              color={e.color}
              href={`/category/${e.name}`}
            />
          );
        })}
      </TagContainer>
      <CardTitle title={post.title} href={'/'} />
      <CardFooter author={author} time={'October 21, 2022'} />
    </CardStyled>
  );
};

export default PostCard;
