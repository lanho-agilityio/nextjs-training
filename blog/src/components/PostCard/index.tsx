import { CardStyled, TagContainer } from './PostCard.styled';
import Tag from '../Tag';
import CardTitle from '../CardTitle';
import CardPicture from '../CardImage';
import CardFooter from '../CardFooter';
import { MOCK_AUTHOR } from '../../mocks/author';
import { Post } from '../../types/post';

export interface PostCardProps {
  data: Post;
}

const PostCard = ({ data }: PostCardProps): JSX.Element => {
  const author = MOCK_AUTHOR;

  console.log(data)

  return (
    <CardStyled>
      <CardPicture
        imagePath={data.imageBase64}
        href={`/posts/details/${data.id}`}
        // href={`/posts/edit/${data.id}`}
      />
      <TagContainer>
        {data.tag.map((e) => 
         (
          <Tag
            key={(e.id)}
            title={e.name}
            color={e.color}
            href={`/category/${e.name}`}
          />
        )
        )}
      </TagContainer>
      <CardTitle
        title={data.title}
        href={`/posts/details/${data.id}`}
        // href={`/posts/edit/${data.id}`}
      />
      <CardFooter author={author} time={'October 21, 2022'} />
    </CardStyled>
  );
};

export default PostCard;
