import { memo } from 'react';
import { Box } from '@mui/material';

// Components
import PostCardContent from './PostCardContent';
import PostCardImage from './PostCardImage';

// Models
import { Post } from '@/models';

interface PostCardProps {
  content: Post;
}

const PostCard = ({ content }: PostCardProps): JSX.Element => {
  const { id, title, tag, user, updatedAt, imageBase64 } = content;

  return (
    <Box sx={{ width: 'full', display: 'flex', flexDirection: 'column' }}>
      <PostCardImage src={imageBase64} alt={title} to={id} />
      <PostCardContent id={id} title={title} tag={tag} author={user} updatedAt={updatedAt} />
    </Box>
  );
};

export default memo(PostCard);
