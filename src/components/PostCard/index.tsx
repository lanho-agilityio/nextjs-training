import { Post } from '@/models';
import { Box } from '@mui/material';

// Components
import PostCardContent from './PostCardContent';
import PostCardImage from './PostCardImage';

interface PostCardProps {
  content: Post;
  isRecentPost?: boolean;
  isArchived?: boolean;
}

const PostCard = ({ content, isRecentPost, isArchived = false }: PostCardProps): JSX.Element => {
  const { id, title, tag, author, updatedAt, pictureSrc } = content;
  return (
    <Box
      sx={{ width: 'full', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <PostCardImage src={pictureSrc} alt={title} to={id} isRecentPost={isRecentPost} isArchived={isArchived} />
      <PostCardContent id={id} title={title} tag={tag} author={author} updatedAt={updatedAt} />
    </Box>
  );
};

export default PostCard;
