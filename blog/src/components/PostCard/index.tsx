import { CardStyled, TagContainer } from './PostCard.styled';
import Tag from '../Tag';
import CardTitle from '../CardTitle';
import CardPicture from '../CardImage';
import CardFooter from '../CardFooter';
import { Post } from '../../types/post';

export interface PostCardProps {
  data: Post;
}

const PostCard = ({ data }: PostCardProps): JSX.Element => {
  return (
    <CardStyled>
      <CardPicture imagePath={data.imageBase64} href={`/posts/${data.id}`} />
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
      <CardTitle title={data.title} href={`/posts/${data.id}`} />
      <CardFooter
        user={data.user}
        time={new Date(data.dateCreated).toDateString()}
      />
    </CardStyled>
  );
};

export default PostCard;
