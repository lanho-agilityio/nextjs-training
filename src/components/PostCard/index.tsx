import { Post } from '@/models';
import { Box } from '@mui/material';
import PostCardContent from './PostCardContent';
import PostCardImage from './PostCardImage';

export interface PostCardProps {
  content: Post;
  isRecentPost?: boolean;
}

const PostCard = ({ content, isRecentPost }: PostCardProps): JSX.Element => {
  const { id, title, tag, author, updatedAt, pictureSrc } = content;
  return (
    <Box
      sx={{ width: 'full', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <PostCardImage src={pictureSrc} alt={title} to={id} isRecentPost={isRecentPost}/>
      <PostCardContent id={id} title={title} tag={tag} author={author} updatedAt={updatedAt} />
    </Box>
  );
};

export default PostCard;
