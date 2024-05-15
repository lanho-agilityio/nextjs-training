import { Post } from '@/models';
import { Box } from '@mui/material';
import PostCardContent from './PostCardContent';
import PostCardImage from './PostCardImage';

export interface PostCardProps {
  content: Post;
  _image?: {
    width?: number | `${number}`;
    height?: number | `${number}`;
  };
}

const PostCard = ({ content, _image }: PostCardProps): JSX.Element => {
  const { id, title, tag, author, updatedAt, pictureSrc } = content;
  return (
    <Box display="flex" flexDirection="column" position="relative">
      <PostCardImage src={pictureSrc} alt={title} to={id} width={_image?.width} height={_image?.height} />
      <PostCardContent id={id} title={title} tag={tag} author={author} updatedAt={updatedAt} />
    </Box>
  );
};

export default PostCard;
